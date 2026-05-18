import type { TranslationUIStruct } from "../../common/interfaces";
import type { AppLanguage } from "../interfaces";

/** Spanish support for translations. */
const SPANISH_LABELS: TranslationUIStruct = {
    personalInfo: {
        title: 'Ingeniero de Software, Desarrollador',
        bio: 'Soy un desarrollador de software especializado en el ecosistema web',
        about: 'Disfruto construir soluciones limpias y escalables que realmente marquen la diferencia. Me gusta sumergirme en problemas complejos, aprender nuevas tecnologías sobre la marcha y colaborar con equipos que se preocupan por la calidad. Cuando no estoy programando, probablemente estoy explorando nuevas herramientas o mentoreando a otros.'
    },
    sections: {
        hero: {
            cta: "Hablemos",
            downloadCv: "Descargar CV"
        },
        experience: {
            title: "Experiencia",
            currently: "Actualmente",
            past: "Anteriormente",
            internships: "Donde todo comenzó",
            techLabel: "Stack Tecnológico"
        },
        skills: {
            title: "Habilidades",
            soft: "Habilidades Blandas",
            hard: "Habilidades Técnicas",
            viewAll: "Ver todo"
        },
        projects: {
            title: "Proyectos",
            watchStack: "Ver tecnologías aplicadas..."
        },
        contact: {
            title: "Contacto",
            question: "¿Tienes un proyecto en mente o simplemente quieres saludar?",
            cta: "Conectémonos"
        }
    },
    nav: {
        experience: 'Experiencia',
        skills: 'Habilidades',
        projects: 'Proyectos',
        contact: 'Contacto',
    },
    actions: {
        themeToggle: 'Cambiar tema',
        menuToggle: 'Abrir menú',
        changeLanguage: 'Cambiar idioma'
    }
}

/** Spanish Support Pack. */
export const SPANISH_BUNDLE: AppLanguage = {
    locale: 'es-ES',
    name: 'Español',
    available: true,
    data: SPANISH_LABELS
}