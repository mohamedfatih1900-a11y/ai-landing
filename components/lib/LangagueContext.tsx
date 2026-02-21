"use client";

import { createContext, useContext, useState } from "react";
import en from "./locales/en.json";
import fr from "./locales/fr.json";

type Lang = "en" | "fr";

const translations = { en, fr };

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: any;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }
  return context;
}