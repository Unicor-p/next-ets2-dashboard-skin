import { createApp } from 'vue';

import TranslatorPlugin from '@/vendor/translator/translator.plugin';

import App from '@/App.vue';
import '@/assets/css/main.css';

createApp(App).use(TranslatorPlugin).mount('#app');
