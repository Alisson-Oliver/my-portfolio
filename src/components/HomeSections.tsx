import { useEffect, useRef, useState } from "react";
import { copy } from "../data/copy";
import { career, contact, principles, quote, stack } from "../data/profile";
import { useLanguage } from "../context/language";
import { Reveal } from "./Reveal";
import { Rise } from "./Rise";
import { ScrollWords } from "./ScrollWords";

export function CareerSection() {
  const { tr } = useLanguage();
  return (
    <section id="percurso" className="path">
      <div className="grid">
        <Rise>{tr(copy.career)}</Rise>
        <ol className="tl">
          {career.map((item, index) => (
            <Reveal as="li" key={item.title.en + item.org} delay={index * 0.05}>
              <div className="d">{tr(item.date)}</div>
              <div>
                <h3>{tr(item.title)}</h3>
                <div className="o">{item.org}</div>
                {item.text && <p>{tr(item.text)}</p>}
              </div>
            </Reveal>
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
        <Rise>{tr(copy.howIWork)}</Rise>
        <ul>
          {principles.map((item, index) => (
            <Reveal as="li" key={item.title.en} delay={index * 0.05}>
              <h3>{tr(item.title)}</h3>
              <p>{tr(item.text)}</p>
            </Reveal>
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
      <ScrollWords text={tr(quote)} />
    </section>
  );
}

export function StackSection() {
  const { tr } = useLanguage();
  return (
    <section id="stack" className="stack">
      <Rise>{tr(copy.stack)}</Rise>
      <dl>
        {stack.map((row, index) => (
          <Reveal className="srow" key={row.group.en} delay={index * 0.06}>
            <dt>{tr(row.group)}</dt>
            <dd>{row.items}</dd>
          </Reveal>
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
      <Rise>{tr(copy.talk)}</Rise>
      <Reveal line={false} delay={0.15}>
        <a ref={mail} className="mail" href={`mailto:${contact.email}`}>
          {contact.email}
        </a>
      </Reveal>
      <Reveal line={false} delay={0.3} className="cr">
        <button type="button" onClick={copyEmail}>
          {tr(copied ? copy.copied : copy.copyEmail)}
        </button>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href={contact.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </Reveal>
      <footer>
        <span>Alisson Oliveira</span>
        <span>{tr(copy.location)}</span>
      </footer>
    </section>
  );
}
