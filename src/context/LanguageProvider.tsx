import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Lang, Localized } from "../data/types";
import { LanguageContext } from "./language";

const STORAGE_KEY = "lang";

function readStoredLang(): Lang {
  try {
    return localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "pt";
  } catch {
    return "pt";
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      return;
    }
  }, []);

  const value = useMemo(
    () => ({ lang, setLang, tr: (text: Localized) => text[lang] }),
    [lang, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
