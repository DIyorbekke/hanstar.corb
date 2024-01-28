import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import uz from "../locales/uz/translation.json"
import ru from "../locales/ru/translation.json"
import eng from "../locales/eng/translation.json"
import ko from "../locales/ko/translation.json"

const language = ['uz', 'ru', 'eng', 'ko'];

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'uz',
        whiteList: language,
        interpolation: {
            escapeValue: false,
        },
        resources: {
            uz: {
                translation: uz,
            },
            ru: {
                translation: ru,
            },
            eng: {
                translation: eng,
            },
            ko: {
                translation: ko,
            },
        },
    });

export default i18n;