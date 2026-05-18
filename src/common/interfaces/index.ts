import type { LocalizedString } from "../../i18n/interfaces";
import type { HardSkillCategory } from "../enums/HardSkillCategory";

/**
 * Core interface for the Application's UI text layers.
 * Defines a strict schema that all supported languages must implement.
 */
export interface TranslationUIStruct {
  personalInfo: {
    title: string;
    bio: string;
    about: string;
  };
  sections: {
    hero: {
      cta: string;
      downloadCv: string;
    };
    experience: {
      title: string;
      currently: string;
      past: string;
      internships: string;
      techLabel: string;
    };
    skills: {
      title: string;
      soft: string;
      hard: string;
      viewAll: string;
    };
    projects: {
      title: string;
      watchStack: string;
    };
    contact: {
      title: string;
      question: string;
      cta: string;
    };
  };
  nav: {
    experience: string;
    skills: string;
    projects: string;
    contact: string;
  };
  actions: {
    themeToggle: string;
    menuToggle: string;
    changeLanguage: string;
  };
}

/**
 * Interface for personal info.
 */
export interface PersonalInfo {
  /** Full name or nickname. */
  name: string;
  /** Title for this person. */
  title: string;
  /** Little bio for this person. */
  bio: string;
  /** Email address for contacting. */
  email?: string;
  /** C.V. Url for downloading. */
  cvUrl?: string;
  /** List of social networks. */
  socials: Array<SocialMedia>;
}

/**
 * Interface for social media items.
 */
export interface SocialMedia {
  /** Name for the social media. */
  name: string;
  /** "Font awesome" icon classes or class.*/
  faIcon: string;
  /** Url to check this social network. */
  url: string;
  /** Additional notes. */
  notes?: string;
}

/**
 * Interface for skills.
 */
/**
 * Interface for soft skills (localized names).
 */
export interface SoftSkill {
  id: number;
  name: LocalizedString;
  description: LocalizedString;
  faIcon?: string;
}

export interface HardSkill {
  id: number;
  name: string;
  category: HardSkillCategory;
  description?: string;
  devIcon?: string;
}

export interface Experience {
  id: number;
  title: LocalizedString;
  company: string;
  period: LocalizedString;
  description: LocalizedString;
  level: number;
  technologies: Array<string>;
  current: boolean;
  wasIntern: boolean;
}
