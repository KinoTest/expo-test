import { I18n } from "i18n-js";
import { getLocales } from "expo-localization";

import gl from './gl.json';
import es from './es.json';
import en from './en.json';

const deviceLanguage = getLocales()?.[0]?.languageCode ?? "es";

const i18n = new I18n({
    gl,
    es,
    en,
});

i18n.defaultLocale = deviceLanguage;

i18n.locale = deviceLanguage;

export {
    i18n,
    deviceLanguage,
}