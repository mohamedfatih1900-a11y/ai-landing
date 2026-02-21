"use client";

import { createContext, useContext, useState } from "react";
import en from "./locales/en.json";
import fr from "./locales/fr.json";

type Lang = "en" | "fr";

const translations = { en, fr };

const LanguageContext = createContext<any>(null);

export function LanguageProvider({ children }: any) {
  const [lang, setLang] = useState<Lang>("en");

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}