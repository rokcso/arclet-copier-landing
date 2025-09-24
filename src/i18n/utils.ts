import zhTranslations from "./zh.json";
import zhTwTranslations from "./zh-tw.json";
import enTranslations from "./en.json";
import esTranslations from "./es.json";
import jaTranslations from "./ja.json";

export const translations = {
  zh: zhTranslations,
  "zh-tw": zhTwTranslations,
  en: enTranslations,
  es: esTranslations,
  ja: jaTranslations,
};

export type Language = keyof typeof translations;

export function getTranslation(lang: Language, key: string): string {
  const keys = key.split(".");
  let value: any = translations[lang];

  for (const k of keys) {
    value = value?.[k];
  }

  return value || key;
}

export function t(lang: Language) {
  return (key: string) => getTranslation(lang, key);
}
