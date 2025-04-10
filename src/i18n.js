import { createI18n } from 'vue-i18n';
import en from './locales/en.ts';
import es from './locales/es.ts';

export default createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    en,
    es,
  },
});
