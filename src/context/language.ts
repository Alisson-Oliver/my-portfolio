import { createContext, useContext } from "react";
import type { Lang, Localized } from "../data/types";

export type LanguageValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  tr: (text: Localized) => string;
};

export const LanguageContext = createContext<LanguageValue | null>(null);

export function useLanguage() {
  const value = useContext(LanguageContext);
  if (!value) throw new Error("useLanguage must be used inside LanguageProvider");
  return value;
}
