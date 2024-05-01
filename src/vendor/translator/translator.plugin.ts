import type { App } from 'vue';

import { translate } from '@/vendor/translator/translate';
import { translations, useTranslator } from '@/vendor/translator/useTranslator';

export default {
  install: (app: App): void => {
    const { currentLocale } = useTranslator();
    app.config.globalProperties.$t = (target: string): string =>
      translate(target, currentLocale.value, translations);
  }
};
