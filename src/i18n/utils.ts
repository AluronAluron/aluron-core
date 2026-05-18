import { APP_LOCALE_BUNDLES, DEFAULT_LOCALE_PACK } from "."
import type { AppLanguage } from "./interfaces";

export const getLocalePack = (locale: string): AppLanguage => {
    const pack = APP_LOCALE_BUNDLES.find(l => l.locale === locale && l.available);
    return (pack ?? DEFAULT_LOCALE_PACK) as AppLanguage;
}