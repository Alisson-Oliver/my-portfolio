import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { copy } from "../data/copy";
import { useLanguage } from "../context/language";
import { Hero } from "../components/Hero";
import { WorkSection } from "../components/WorkSection";
import {
  CareerSection,
  ContactSection,
  PrinciplesSection,
  QuoteSection,
  StackSection,
} from "../components/HomeSections";

export function HomePage() {
  const { hash } = useLocation();
  const { tr } = useLanguage();

  useEffect(() => {
    document.title = "Alisson Oliveira";
    const meta = document.querySelector('meta[name="description"]');
    meta?.setAttribute("content", tr(copy.metaDescription));
  }, [tr]);

  useEffect(() => {
    if (!hash) return;
    document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "auto", block: "start" });
  }, [hash]);

  return (
    <>
      <Hero />
      <WorkSection />
      <div className="wrap">
        <CareerSection />
        <PrinciplesSection />
        <QuoteSection />
        <StackSection />
        <ContactSection />
      </div>
    </>
  );
}
