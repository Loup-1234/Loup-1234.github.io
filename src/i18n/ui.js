/*
 * Copyright (C) 2026 Alain HUMEAU-BUI
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

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