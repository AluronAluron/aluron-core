import type { Experience } from "../../interfaces";

export const EXPERIENCES: Array<Experience> = [
    {
        id: 1,
        title: {
            "es-ES": "Ingeniero de Software",
            "en-US": "Software Engineer",
        },
        company: "Ilink Digital Ultrasist",
        period: {
            "es-ES": "Jun 2025 - Presente",
            "en-US": "Jun 2025 - Present"
        },
        description: {
            "es-ES": "Desarrollo de microservicios en Java con Spring Boot, participando en la construcción de la nueva Ventanilla Única de Comercio Exterior Mexicana (VUCEM) 3.0 para el Servicio de Administración Tributaria (SAT).",
            "en-US": "Development of Java microservices with Spring Boot, contributing to the construction of Mexico's new Single Window for Foreign Trade (VUCEM) 3.0 for the Tax Administration Service (SAT)."
        },
        level: 0,
        technologies: ["Java", "Spring Boot", "Microservices", "REST API", "PostgreSQL"],
        current: true,
        wasIntern: false,
    },
    {
        id: 2,
        title: {
            "es-ES": "Líder Técnico y Arquitecto Backend",
            "en-US": "Tech Lead & Backend Architect"
        },
        company: "Integra IT Soluciones",
        period: {
            "es-ES": "Ene 2025 - Mar 2026",
            "en-US": "Jan 2025 - Mar 2026"
        },
        description: {
            "es-ES": "Responsable del ciclo de vida completo (E2E) de un sistema de gestión y seguimiento para la NOM-035-STPS-2018, desde el diseño de la arquitectura de datos hasta el despliegue en producción.",
            "en-US": "Responsible for the full lifecycle (E2E) of a management and compliance tracking system for NOM-035-STPS-2018, from data architecture design through production deployment."
        },
        level: 0,
        technologies: ["Node.js", "React", "MongoDB", "Docker", "AWS"],
        current: false,
        wasIntern: false,
    },
    {
        id: 3,
        title: {
            "es-ES": "Desarrollador Full Stack y Gestor AFIS",
            "en-US": "Full Stack Developer & AFIS Coordinator"
        },
        company: "Secretariado Ejecutivo del Sistema Estatal de Seguridad Pública",
        period: {
            "es-ES": "Ago 2024 - Ene 2025",
            "en-US": "Aug 2024 - Jan 2025"
        },
        description: {
            "es-ES": "Registro y resguardo de datos biométricos del personal de seguridad pública del estado de Tabasco. Coordinación con Plataforma México y el Centro Nacional de Inteligencia (CNI) para la integración y consulta de datos confidenciales. Desarrollo de aplicativos web internos.",
            "en-US": "Registration and safeguarding of biometric data for Tabasco's public security personnel. Coordination with Plataforma México and the National Intelligence Center (CNI) for confidential data integration and querying. Development of internal web applications."
        },
        level: 0,
        technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
        current: false,
        wasIntern: false,
    },
    {
        id: 4,
        title: {
            "es-ES": "Desarrollador Backend",
            "en-US": "Backend Developer"
        },
        company: "Integra IT Soluciones",
        period: {
            "es-ES": "Jul 2024 - Dic 2024",
            "en-US": "Jul 2024 - Dec 2024"
        },
        description: {
            "es-ES": "Mantenimiento e implementación de nuevas funcionalidades en un Sistema de Gestión de Inventarios para una distribuidora de Caterpillar en la Región Marina Noreste de México (RMNE) en colaboración con Petróleos Mexicanos (PEMEX).",
            "en-US": "Maintenance and implementation of new features in an Inventory Management System for a Caterpillar distributor in Mexico's Northeast Marine Region (RMNE) in collaboration with Petróleos Mexicanos (PEMEX)."
        },
        level: 0,
        technologies: ["Python", "Django", "PostgreSQL", "Redis", "Celery"],
        current: false,
        wasIntern: false,
    },
    {
        id: 5,
        title: {
            "es-ES": "Becario de Desarrollo de Software",
            "en-US": "Software Development Intern"
        },
        company: "Integra IT Soluciones",
        period: {
            "es-ES": "Ene 2024 - Jun 2024",
            "en-US": "Jan 2024 - Jun 2024"
        },
        description: {
            "es-ES": "Análisis, diseño y desarrollo de una aplicación de gestión de finanzas personales para socios de la empresa. Impartición de cursos internos sobre desarrollo web para estudiantes en proceso de estadía profesional.",
            "en-US": "Analysis, design, and development of a personal finance management application for company partners. Delivery of internal web development courses for students during their professional internship."
        },
        level: 0,
        technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Git"],
        current: false,
        wasIntern: true,
    },
    {
        id: 6,
        title: {
            "es-ES": "Becario de Análisis de Sistemas",
            "en-US": "Systems Analysis Intern"
        },
        company: "H. Ayuntamiento del Centro (DIF)",
        period: {
            "es-ES": "Sep 2023 - Dic 2023",
            "en-US": "Sep 2023 - Dec 2023"
        },
        description: {
            "es-ES": "Análisis y diseño de un proceso de digitalización para los procedimientos internos de la dependencia (DIF).",
            "en-US": "Analysis and design of a digitization process for the agency's internal procedures (DIF)."
        },
        level: 0,
        technologies: ["UML", "SQL Server", "C#", ".NET", "Azure"],
        current: false,
        wasIntern: true,
    },
    {
        id: 7,
        title: {
            "es-ES": "Becario de Desarrollo Full Stack",
            "en-US": "Full Stack Development Intern"
        },
        company: "Secretaría de Finanzas del Gobierno del Estado de Tabasco",
        period: {
            "es-ES": "Nov 2021 - Dic 2022",
            "en-US": "Nov 2021 - Dec 2022"
        },
        description: {
            "es-ES": "Documentación del código fuente, servicios y base de datos de los sistemas internos desarrollados por la Unidad de Tecnologías de Información y Comunicación (UTIC). Desarrollo de aplicaciones web internas.",
            "en-US": "Documentation of source code, services, and databases for internal systems developed by the Information and Communication Technologies Unit (UTIC). Development of internal web applications."
        },
        level: 0,
        technologies: ["PHP", "MySQL", "JavaScript", "jQuery", "HTML/CSS"],
        current: false,
        wasIntern: true,
    }
]
