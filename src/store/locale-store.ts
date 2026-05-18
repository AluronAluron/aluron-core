import { atom } from "nanostores";
import { LocalStorageService } from "../common/services/local-storage.service";
import { DEFAULT_LOCALE_PACK } from "../i18n";
import type { AppLocale } from "../i18n/interfaces";
import { GeneralConstants } from "../common/utils/constants/general.constants";
import { getLocalePack } from "../i18n/utils";

const initialLocale = 
    (typeof window !== 'undefined' 
        && LocalStorageService.getInstance()
            .get(GeneralConstants.CLIENT_LOCALE_KEY) as AppLocale
    ) || DEFAULT_LOCALE_PACK.locale;

export const currentLocale = atom(getLocalePack(initialLocale));

export const setLanguage = (locale: AppLocale) => {
    LocalStorageService.getInstance().set(GeneralConstants.CLIENT_LOCALE_KEY, locale);
    console.log(`[Locale] [${locale}] has set.`);
    document.documentElement.lang = locale;
    currentLocale.set(getLocalePack(locale));
}