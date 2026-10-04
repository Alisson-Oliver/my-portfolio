import type { MouseEvent } from "react";
import { copy } from "../data/copy";
import { useLanguage } from "../context/language";
import { useTheme } from "../context/theme";
import { useTransition } from "../context/transition";

const links = [
  { id: "trabalho", label: copy.nav.work },
  { id: "percurso", label: copy.nav.career },
  { id: "stack", label: copy.nav.stack },
  { id: "contato", label: copy.nav.contact },
];

export function Header() {
  const { lang, setLang, tr } = useLanguage();
  const { theme, setTheme } = useTheme();
  const { goTo } = useTransition();

  const open = (event: MouseEvent, hash?: string) => {
    event.preventDefault();
    goTo("/", hash);
  };

  return (
    <div className="wrap">
      <header className="top">
        <a href="/" className="brand" aria-label="Alisson Oliveira" onClick={(event) => open(event)}>
          Alisson Oliveira
        </a>
        <nav aria-label={tr(copy.sections)}>
          {links.map((link) => (
            <a key={link.id} href={`/#${link.id}`} onClick={(event) => open(event, link.id)}>
              {tr(link.label)}
            </a>
          ))}
        </nav>
        <div className="tools">
          <div className="tools" role="group" aria-label={tr(copy.language)}>
            <button type="button" aria-pressed={lang === "pt"} onClick={() => setLang("pt")}>
              PT
            </button>
            <button type="button" aria-pressed={lang === "en"} onClick={() => setLang("en")}>
              EN
            </button>
          </div>
          <div className="tools" role="group" aria-label={tr(copy.theme)}>
            <button type="button" aria-pressed={theme === "light"} onClick={() => setTheme("light")}>
              {tr(copy.light)}
            </button>
            <button type="button" aria-pressed={theme === "dark"} onClick={() => setTheme("dark")}>
              {tr(copy.dark)}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
