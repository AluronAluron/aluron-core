import type { TranslationUIStruct } from "../../common/interfaces";
import type { AppLanguage } from "../interfaces";

/** English support for translations. */
const ENGLISH_LABELS: TranslationUIStruct = {
    personalInfo: {
        title: 'Software Engineer, Developer',
        bio: 'I\'m a Software Developer specialized in the web ecosystem',
        about: 'I enjoy building clean, scalable solutions that actually make a difference. I like diving into complex problems, learning new technologies on the fly, and collaborating with teams that care about quality. When I\'m not coding, I\'m probably exploring new tools or mentoring others.'
    },
    sections: {
        hero: {
            cta: "Let's talk",
            downloadCv: "Download CV"
        },
        experience: {
            title: "Experience",
            currently: "Currently working as",
            past: "Previously",
            internships: "Where it all started",
            techLabel: "Tech Stack"
        },
        skills: {
            title: "Skills",
            soft: "Soft Skills",
            hard: "Hard Skills",
            viewAll: "View all"
        },
        projects: {
            title: "Projects",
            watchStack: "See technologies"
        },
        contact: {
            title: "Contact",
            question: "Got a project in mind or just want to say hi?",
            cta: "Let's connect"
        }
    },
    nav: {
        experience: 'Experience',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact',
    },
    actions: {
        themeToggle: 'Change theme',
        menuToggle: 'Show menu',
        changeLanguage: 'Change language'
    }
}

/** English Support Pack. */
export const ENGLISH_BUNDLE: AppLanguage = {
    locale: 'en-US',
    name: 'English',
    available: true,
    data: ENGLISH_LABELS
}