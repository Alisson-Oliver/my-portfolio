import { useEffect, useRef } from "react";

export function ScrollWords({ text }: { text: string }) {
  const root = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const node = root.current;
    if (!node) return;
    const spans = Array.from(node.querySelectorAll<HTMLElement>("span"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      spans.forEach((span) => (span.style.opacity = "1"));
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const top = node.getBoundingClientRect().top;
      const viewport = window.innerHeight;
      const progress = Math.min(1, Math.max(0, (viewport * 0.85 - top) / (viewport * 0.5)));
      spans.forEach((span, index) => {
        span.style.opacity = index / spans.length < progress ? "1" : "0.18";
      });
    };
    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [text]);

  return (
    <p ref={root} className="words">
      {words.map((word, index) => (
        <span key={`${word}-${index}`}>{word} </span>
      ))}
    </p>
  );
}
