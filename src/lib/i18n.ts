import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome_message: "Nice to meet you! This is DongWook Lee(Henry Lee)",
        About: "About",
        "Work Experience": "Work Experience",
        Project: "Projects",
        "Education & Activities": "Education & Activities",
        "Light Mode": "Light Mode",
        "Dark Mode": "Dark Mode",
      },
    },
    ko: {
      translation: {
        welcome_message: "반갑습니다! 이동욱입니다.",
        About: "자기소개",
        "Work Experience": "업무 경험",
        Project: "프로젝트",
        "Education & Activities": "교육 및 활동",
        "Light Mode": "라이트 모드",
        "Dark Mode": "다크 모드",
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
