import { computed, reactive } from 'vue';

import type { Translations } from '@/vendor/translator/translate.type';
import { TranslationLocale } from '@/vendor/translator/translate.type';
import cn_cn from '@/vendor/translator/translations/cn-CN.yaml';
import fr_fr from '@/vendor/translator/translations/fr-FR.yaml';
import pt_pt from '@/vendor/translator/translations/pt-PT.yaml';
import ru_ru from '@/vendor/translator/translations/ru-RU.yaml';

export const translations: Translations = {
  'fr-FR': fr_fr,
  'cn-CN': cn_cn,
  'ru-RU': ru_ru,
  'pt-PT': pt_pt
};

type TranslatorState = {
  locale: TranslationLocale | null;
};

const state = reactive<TranslatorState>({
  locale: TranslationLocale.FR_FR
});

const getters = {
  currentLocale: computed<TranslationLocale | null>(() => state.locale)
};
const actions = {
  changeLocale: (newLocale: TranslationLocale | null) => {
    state.locale = newLocale;
  }
};

export const useTranslator = () => ({
  ...getters,
  ...actions
});
