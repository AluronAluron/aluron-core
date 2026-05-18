import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GeneralConstants } from "../../common/utils/constants/general.constants";
import { MODELS } from "../../common/data/portfolio/models.data";

function easeOutCirc(x: number) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const Model3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer>(null);
  const sceneRef = useRef<THREE.Scene>(null);
  const cameraRef = useRef<{ camera: THREE.PerspectiveCamera; initialPosition: THREE.Vector3 }>(null);
  const controlsRef = useRef<OrbitControls>(null);
  const frameRef = useRef(0);
  const animationIdRef = useRef<number>(null);
  const lightsRef = useRef<{ ambientLight: THREE.AmbientLight; Dlight: THREE.DirectionalLight }>(null);
  const modelRef = useRef<THREE.Group>(null);

  const [loaderDone, setLoaderDone] = useState(false);
  const [modelReady, setModelReady] = useState(false);

  // Preload model in memory immediately
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(MODELS.heroModel, (gltf: any) => {
      const model = gltf.scene;
      model.position.set(0, -0.5, 0);
      model.scale.set(3.2, 3.2, 3.2);
      modelRef.current = model;
      setModelReady(true);
    });
  }, []);

  // Listen for loader finished
  useEffect(() => {
    const handleLoaderFinished = () => setLoaderDone(true);
    window.addEventListener(GeneralConstants.LOADER_FINISHED, handleLoaderFinished);
    return () => window.removeEventListener(GeneralConstants.LOADER_FINISHED, handleLoaderFinished);
  }, []);

  // Mount scene only when both loader is done AND model is preloaded
  useEffect(() => {
    if (!containerRef.current || !loaderDone || !modelReady) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    const initialPosition = new THREE.Vector3(0, 2, 5);
    camera.position.copy(initialPosition);
    cameraRef.current = { camera, initialPosition };

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const Dlight = new THREE.DirectionalLight(0xffffff, 1);
    Dlight.position.set(-100, 120, 300);
    Dlight.castShadow = true;
    Dlight.shadow.camera.top = 200;
    Dlight.shadow.camera.bottom = -200;
    Dlight.shadow.camera.right = 200;
    Dlight.shadow.camera.left = -200;
    Dlight.shadow.mapSize.set(4096, 4096);
    scene.add(Dlight);

    lightsRef.current = { ambientLight, Dlight };

    // Dark mode handler
    const updateLights = () => {
      const isDark = document.documentElement.classList.contains("dark");
      if (lightsRef.current) {
        lightsRef.current.ambientLight.intensity = isDark ? 0.3 : 0.7;
        lightsRef.current.Dlight.intensity = isDark ? 0.5 : 1;
      }
    };

    const observer = new MutationObserver(updateLights);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    updateLights();

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;
    controls.enabled = false;
    controlsRef.current = controls;

    // Add preloaded model to scene
    if (modelRef.current) {
      scene.add(modelRef.current);
    }

    const planeGeometry = new THREE.PlaneGeometry(55, 55);
    const planeMaterial = new THREE.MeshStandardMaterial({ color: 0xf5f5f5, transparent: true, opacity: 0 });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -0.5;
    plane.receiveShadow = true;
    scene.add(plane);

    sceneRef.current = scene;

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      if (cameraRef.current && sceneRef.current) {
        const { camera, initialPosition } = cameraRef.current;
        const frame = frameRef.current;

        if (frame <= 100) {
          frameRef.current = frame + 1;
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20.67;
          camera.position.x = initialPosition.x * Math.cos(rotSpeed) + initialPosition.z * Math.sin(rotSpeed);
          camera.position.z = initialPosition.z * Math.cos(rotSpeed) - initialPosition.x * Math.sin(rotSpeed);
          camera.lookAt(0, 0, 0);
        } else {
          if (controlsRef.current && !controlsRef.current.enabled) {
            controlsRef.current.enabled = true;
          }
          controlsRef.current?.update();
        }
      }

      if (sceneRef.current && cameraRef.current) {
        renderer.render(sceneRef.current, cameraRef.current.camera);
      }
    };

    animate();

    // Resize handler
    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      renderer.domElement.remove();
      renderer.dispose();
    };
  }, [loaderDone, modelReady]);

  const ready = loaderDone && modelReady;

  return (
    <div
      style={{
        width: "100%",
        height: "400px",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "400px",
          opacity: ready ? 1 : 0,
          transform: ready ? "translateY(0)" : "translateY(-40px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      />
    </div>
  );
};

export default Model3D;
