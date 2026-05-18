import { HardSkillCategory } from "../../enums/HardSkillCategory";
import type { SoftSkill, HardSkill } from "../../interfaces";

export const SOFT_SKILLS: Array<SoftSkill> = [
    {
        id: 1,
        name: { "en-US": "Teamwork", "es-ES": "Trabajo en equipo" },
        description: { "en-US": "Better results happen when we collaborate", "es-ES": "Los mejores resultados nacen de la colaboración" },
        faIcon: "fa-solid fa-people-group",
    },
    {
        id: 2,
        name: { "en-US": "Leadership", "es-ES": "Liderazgo" },
        description: { "en-US": "I enjoy helping others grow while we ship great work", "es-ES": "Me gusta ayudar a otros a crecer mientras entregamos buen trabajo" },
        faIcon: "fa-solid fa-compass",
    },
    {
        id: 3,
        name: { "en-US": "Problem Solving", "es-ES": "Resolución de Problemas" },
        description: { "en-US": "Every bug is just a puzzle waiting to be solved", "es-ES": "Cada bug es solo un rompecabezas esperando ser resuelto" },
        faIcon: "fa-solid fa-puzzle-piece",
    },
    {
        id: 4,
        name: { "en-US": "Effective Communication", "es-ES": "Comunicación Efectiva" },
        description: { "en-US": "I keep things clear so everyone stays on the same page", "es-ES": "Mantengo las cosas claras para que todos estemos en sintonía" },
        faIcon: "fa-solid fa-comments",
    },
    {
        id: 5,
        name: { "en-US": "Quick Learner", "es-ES": "Aprendizaje Rápido" },
        description: { "en-US": "New framework? Give me a weekend", "es-ES": "¿Nuevo framework? Dame un fin de semana" },
        faIcon: "fa-solid fa-bolt",
    },
    {
        id: 6,
        name: { "en-US": "Self-management", "es-ES": "Autogestión" },
        description: { "en-US": "I set my own deadlines and actually meet them", "es-ES": "Me pongo mis propios plazos y los cumplo" },
        faIcon: "fa-solid fa-clock",
    },
    {
        id: 7,
        name: { "en-US": "Analytical Thinking", "es-ES": "Pensamiento Analítico" },
        description: { "en-US": "I like to understand the 'why' before jumping to the 'how'", "es-ES": "Me gusta entender el 'por qué' antes de saltar al 'cómo'" },
        faIcon: "fa-solid fa-magnifying-glass-chart",
    },
    {
        id: 8,
        name: { "en-US": "Critical Thinking", "es-ES": "Pensamiento Crítico" },
        description: { "en-US": "Not every popular solution is the right one", "es-ES": "No toda solución popular es la correcta" },
        faIcon: "fa-solid fa-brain",
    },
    {
        id: 9,
        name: { "en-US": "Adaptability", "es-ES": "Adaptabilidad" },
        description: { "en-US": "Plans change — and that's totally fine", "es-ES": "Los planes cambian, y eso está bien" },
        faIcon: "fa-solid fa-shuffle",
    },
    {
        id: 10,
        name: { "en-US": "Resilience", "es-ES": "Resiliencia" },
        description: { "en-US": "Setbacks are just setups for comebacks", "es-ES": "Los tropiezos son solo impulso para volver con más fuerza" },
        faIcon: "fa-solid fa-shield-heart",
    },
];

export const HARD_SKILLS: Array<HardSkill> = [
    // Programming Languages
    { id: 1, category: HardSkillCategory.ProgrammingLanguage, name: 'Java', devIcon: 'devicon-java-plain' },
    { id: 2, category: HardSkillCategory.ProgrammingLanguage, name: 'JavaScript', devIcon: 'devicon-javascript-plain' },
    { id: 3, category: HardSkillCategory.ProgrammingLanguage, name: 'Object Pascal (Delphi)', devIcon: 'devicon-delphi-plain' },
    { id: 4, category: HardSkillCategory.ProgrammingLanguage, name: 'PHP', devIcon: 'devicon-php-plain' },
    // Frameworks
    { id: 5, category: HardSkillCategory.Frameworks, name: 'Spring Boot', devIcon: 'devicon-spring-plain' },
    { id: 6, category: HardSkillCategory.Frameworks, name: 'NestJS', devIcon: 'devicon-nestjs-original' },
    { id: 7, category: HardSkillCategory.Frameworks, name: 'Express.js', devIcon: 'devicon-express-original' },
    { id: 8, category: HardSkillCategory.Frameworks, name: 'Laravel', devIcon: 'devicon-laravel-original' },
    { id: 9, category: HardSkillCategory.Frameworks, name: 'Angular', devIcon: 'devicon-angular-plain' },
    { id: 10, category: HardSkillCategory.Frameworks, name: 'Astro', devIcon: 'devicon-astro-plain' },
    { id: 11, category: HardSkillCategory.Frameworks, name: 'Firemonkey (FMX)', devIcon: 'fa-solid fa-fire' },
    // Libraries
    { id: 12, category: HardSkillCategory.Libraries, name: 'React', devIcon: 'devicon-react-original' },
    { id: 13, category: HardSkillCategory.Libraries, name: 'Primefaces', devIcon: 'fa-solid fa-table-columns' },
    { id: 14, category: HardSkillCategory.Libraries, name: 'Angular Material', devIcon: 'devicon-angularmaterial-plain' },
    // Databases
    { id: 15, category: HardSkillCategory.Databases, name: 'PostgreSQL', devIcon: 'devicon-postgresql-plain' },
    { id: 16, category: HardSkillCategory.Databases, name: 'MySQL', devIcon: 'devicon-mysql-original' },
    { id: 17, category: HardSkillCategory.Databases, name: 'MongoDB', devIcon: 'devicon-mongodb-plain' },
    { id: 18, category: HardSkillCategory.Databases, name: 'IndexedDB', devIcon: 'fa-solid fa-hard-drive' },
    // Technologies & Environments
    { id: 19, category: HardSkillCategory.Tools, name: 'Git', devIcon: 'devicon-git-plain' },
    { id: 20, category: HardSkillCategory.Tools, name: 'Postman', devIcon: 'devicon-postman-plain' },
    { id: 21, category: HardSkillCategory.Tools, name: 'VCS', devIcon: 'fa-solid fa-code-branch' },
    { id: 22, category: HardSkillCategory.Tools, name: 'Terminal', devIcon: 'fa-solid fa-terminal' },
    { id: 23, category: HardSkillCategory.Tools, name: 'Maven', devIcon: 'devicon-maven-plain' },
    { id: 24, category: HardSkillCategory.Tools, name: 'npm', devIcon: 'devicon-npm-original-wordmark' },
    { id: 25, category: HardSkillCategory.Tools, name: 'Yarn', devIcon: 'devicon-yarn-plain' },
    { id: 26, category: HardSkillCategory.Tools, name: 'Node.js', devIcon: 'devicon-nodejs-plain' },
    { id: 27, category: HardSkillCategory.Tools, name: 'Firebase', devIcon: 'devicon-firebase-plain' },
    { id: 28, category: HardSkillCategory.Tools, name: 'Docker', devIcon: 'devicon-docker-plain' },
    { id: 29, category: HardSkillCategory.Tools, name: 'Linux', devIcon: 'devicon-linux-plain' },
    { id: 30, category: HardSkillCategory.Tools, name: 'Microsoft Office', devIcon: 'fa-solid fa-file-word' },
    { id: 31, category: HardSkillCategory.Tools, name: 'Figma', devIcon: 'devicon-figma-plain' },
    // Architecture & Concepts
    { id: 32, category: HardSkillCategory.ArchitectureAndConcepts, name: 'MVC', devIcon: 'fa-solid fa-layer-group' },
    { id: 33, category: HardSkillCategory.ArchitectureAndConcepts, name: 'REST', devIcon: 'fa-solid fa-arrows-left-right' },
    { id: 34, category: HardSkillCategory.ArchitectureAndConcepts, name: 'Monolithic', devIcon: 'fa-solid fa-cube' },
    { id: 35, category: HardSkillCategory.ArchitectureAndConcepts, name: 'RBAC', devIcon: 'fa-solid fa-user-shield' },
    // Agile Methodologies
    { id: 36, category: HardSkillCategory.AgileMethodologies, name: 'Scrum', devIcon: 'fa-solid fa-people-arrows' },
    { id: 37, category: HardSkillCategory.AgileMethodologies, name: 'Kanban', devIcon: 'fa-solid fa-columns' },
    // Other Languages
    { id: 38, category: HardSkillCategory.OtherLanguages, name: 'HTML', devIcon: 'devicon-html5-plain' },
    { id: 39, category: HardSkillCategory.OtherLanguages, name: 'CSS', devIcon: 'devicon-css3-plain' },
    { id: 40, category: HardSkillCategory.OtherLanguages, name: 'SCSS', devIcon: 'devicon-sass-original' },
    { id: 41, category: HardSkillCategory.OtherLanguages, name: 'Pug', devIcon: 'devicon-pug-plain' },
    { id: 42, category: HardSkillCategory.OtherLanguages, name: 'EJS', devIcon: 'fa-solid fa-file-code' },
    { id: 43, category: HardSkillCategory.OtherLanguages, name: 'Handlebars', devIcon: 'devicon-handlebars-original' },
    { id: 44, category: HardSkillCategory.OtherLanguages, name: 'JSON', devIcon: 'devicon-json-plain' },
    { id: 45, category: HardSkillCategory.OtherLanguages, name: 'Markdown', devIcon: 'devicon-markdown-original' },
];
