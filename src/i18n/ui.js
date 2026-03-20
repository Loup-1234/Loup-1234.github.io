// src/i18n/ui.js

export const languages = {
  fr: "Français",
  en: "English",
};

export const defaultLang = "fr";

export const ui = {
  fr: {
    "nav.home": "Accueil",
    "nav.projects": "Projets",
    "footer.license": "Ce site est placé sous la licence",
  },
  en: {
    "nav.home": "Home",
    "nav.projects": "Projects",
    "footer.license": "This site is licensed under the",
  },
};

export function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
