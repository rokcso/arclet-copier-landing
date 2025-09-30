import zhTranslations from './zh.json';
import zhTwTranslations from './zh-tw.json';
import enTranslations from './en.json';
import deTranslations from './de.json';
import frTranslations from './fr.json';
import ptTranslations from './pt.json';
import ruTranslations from './ru.json';
import koTranslations from './ko.json';
import esTranslations from './es.json';
import jaTranslations from './ja.json';

export const translations = {
  zh: zhTranslations,
  'zh-tw': zhTwTranslations,
  en: enTranslations,
  de: deTranslations,
  fr: frTranslations,
  pt: ptTranslations,
  ru: ruTranslations,
  ko: koTranslations,
  es: esTranslations,
  ja: jaTranslations,
};

export type Language = keyof typeof translations;

export function getTranslation(lang: Language, key: string): any {
  const keys = key.split('.');
  let value: unknown = translations[lang];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k];
    } else {
      return key;
    }
  }

  return value !== undefined ? value : key;
}

export function t(lang: Language) {
  return (key: string) => getTranslation(lang, key);
}
