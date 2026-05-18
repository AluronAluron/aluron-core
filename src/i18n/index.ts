import type { AppLanguage } from "./interfaces";
import { ENGLISH_BUNDLE } from "./languages/en-us";
import { SPANISH_BUNDLE } from "./languages/es-es";

/** Default language pack. */
export const DEFAULT_LOCALE_PACK: AppLanguage = ENGLISH_BUNDLE;

/**
 * Available languages.
 */
export const APP_LOCALE_BUNDLES: Array<AppLanguage> = [
    ENGLISH_BUNDLE,
    SPANISH_BUNDLE,
];