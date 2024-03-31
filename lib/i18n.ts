import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome_message: "Nice to meet you! This is DongWook Lee(Henry Lee)",
      },
    },
    ko: {
      translation: {
        welcome_message: "반갑습니다! 이동욱입니다.",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
