import type { TranslationUIStruct } from "../../common/interfaces";

/**
 * Supported language codes for the application.
 * 
 * - ISO 639-1 Language Code
 * - ISO 3166-1 alpha-2
 */
export type AppLocale = 'en-US' | 'es-ES' | 'pt-BR';

/**
 * A utility type for dynamic content translations (e.g., Database records).
 * Allows mapping supported locales to their respective string values.
 * 
 * @example { en: 'Hello', es: 'Hola' }
 */
export type LocalizedString = Partial<Record<AppLocale, string>>;

/**
 * Core Language Configuration.
 * 
 * Uses a **Discriminated Union** to ensure type safety between 
 * the availability status and the actual translation data.
 * 
 * @type {AppLanguage}
 * @version 1.0
 */
export type AppLanguage = 
{
    /** Locale ID */
    locale: AppLocale;

    /** Display name for UI selectors (e.g., "English", "Español") */
    name: string;

    /** Must be true if the dictionary is fully translated and ready for Production */
    available: boolean;

    /** The translation dictionary strictly following the UI structure */
    data: TranslationUIStruct; // Undefined if available is false
} | {
    locale: AppLocale,
    name: string;

    /** Use false for languages currently in development or translation process */
    available: false; 

    /** Ensures 'data' is inaccessible when the language is not available */
    data?: never
}