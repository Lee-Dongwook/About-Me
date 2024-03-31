import { useState } from "react";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="flex justify-between items-center p-5 bg-gray-200 dark:bg-gray-800">
      <div className="flex gap-4">
        <a href="#about">{t("About")}</a>
        <a href="#work" className="text-gray-900 dark:text-white">
          {t("Work Experience")}
        </a>
        <a href="#projects" className="text-gray-900 dark:text-white">
          {t("Project")}
        </a>
        <a href="#education" className="text-gray-900 dark:text-white">
          {t("Education & Activities")}
        </a>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 text-gray-900 dark:text-white bg-gray-300 dark:bg-gray-700"
        >
          {darkMode ? t("Light Mode") : t("Dark Mode")}
        </button>
        <button
          onClick={() => changeLanguage("en")}
          className="text-gray-900 dark:text-white"
        >
          EN
        </button>
        <button
          onClick={() => changeLanguage("ko")}
          className="text-gray-900 dark:text-white"
        >
          KO
        </button>
      </div>
    </nav>
  );
};
