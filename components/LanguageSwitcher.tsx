"use client";

import { useLanguage } from "@/components/lib/LangagueContext";

export default function LanguageSwitcher() {
const { lang, setLang } = useLanguage();

console.log("Current lang:", lang);

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => setLang("en")}
        className={`px-2 py-1 rounded ${
          lang === "en" ? "bg-purple-600 text-white" : "bg-gray-700 text-gray-300"
        }`}
      >
        EN
      </button>

      <button
        onClick={() => setLang("fr")}
        className={`px-2 py-1 rounded ${
          lang === "fr" ? "bg-purple-600 text-white" : "bg-gray-700 text-gray-300"
        }`}
      >
        FR
      </button>
    </div>
  );
}