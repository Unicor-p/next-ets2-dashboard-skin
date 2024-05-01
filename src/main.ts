import { createApp } from 'vue';

import '@/assets/css/main.css';

import TranslatorPlugin from '@/vendor/translator/translator.plugin';

import App from '@/App.vue';

createApp(App).use(TranslatorPlugin).mount('#app');
