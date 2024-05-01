import type {
  TranslationLocale,
  Translations
} from '@/vendor/translator/translate.type';

export const translate = (
  target: string,
  locale: TranslationLocale | null,
  translations: Translations
): string => {
  if (locale === null) {
    return target;
  }

  const translationLocale = translations[locale];

  if (!(target in translationLocale)) {
    return target;
  }

  return translationLocale[target] as string;
};
