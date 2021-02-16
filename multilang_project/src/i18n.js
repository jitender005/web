import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(Backend);
i18n.use(LanguageDetector);
i18n.use(initReactI18next);

i18n.init({
    fallbackLng: 'en',
    debug: true,
});

export default i18n;