import { copy } from "../data/copy";
import { career, contact, principles, quote, stack } from "../data/profile";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/language";
import { RevealItem } from "./RevealItem";

export function CareerSection() {
  const { tr } = useLanguage();
  return (
    <section id="percurso" className="path">
      <div className="grid">
        <h2>{tr(copy.career)}</h2>
        <ol className="tl">
          {career.map((item, index) => (
            <RevealItem key={item.title.en + item.org} delay={index * 0.05}>
              <div className="d">{tr(item.date)}</div>
              <div>
                <h3>{tr(item.title)}</h3>
                <div className="o">{item.org}</div>
                {item.text && <p>{tr(item.text)}</p>}
              </div>
            </RevealItem>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function PrinciplesSection() {
  const { tr } = useLanguage();
  return (
    <section className="how">
      <div className="grid">
        <h2>{tr(copy.howIWork)}</h2>
        <ul>
          {principles.map((item, index) => (
            <RevealItem key={item.title.en} delay={index * 0.05}>
              <h3>{tr(item.title)}</h3>
              <p>{tr(item.text)}</p>
            </RevealItem>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function QuoteSection() {
  const { tr } = useLanguage();
  return (
    <section className="quote">
      <p>{tr(quote)}</p>
    </section>
  );
}

export function StackSection() {
  const { tr } = useLanguage();
  return (
    <section id="stack" className="stack">
      <h2>{tr(copy.stack)}</h2>
      <dl>
        {stack.map((row) => (
          <div className="srow" key={row.group.en}>
            <dt>{tr(row.group)}</dt>
            <dd>{row.items}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function ContactSection() {
  const { tr } = useLanguage();
  const [copied, setCopied] = useState(false);
  const mail = useRef<HTMLAnchorElement>(null);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      const selection = window.getSelection();
      if (mail.current && selection) {
        const range = document.createRange();
        range.selectNodeContents(mail.current);
        selection.removeAllRanges();
        selection.addRange(range);
      }
    }
  };

  return (
    <section id="contato" className="contact">
      <h2>{tr(copy.talk)}</h2>
      <a ref={mail} className="mail" href={`mailto:${contact.email}`}>
        {contact.email}
      </a>
      <div className="cr">
        <button type="button" onClick={copyEmail}>
          {tr(copied ? copy.copied : copy.copyEmail)}
        </button>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href={contact.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
      <footer>
        <span>Alisson Oliveira</span>
        <span>{tr(copy.location)}</span>
      </footer>
    </section>
  );
}
