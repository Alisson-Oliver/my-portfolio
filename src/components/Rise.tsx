import { createElement, type CSSProperties, type ReactNode } from "react";
import { useInView } from "../hooks/useInView";

type Props = {
  as?: "h2" | "h3" | "p";
  children: ReactNode;
  delay?: number;
};

export function Rise({ as = "h2", children, delay = 0 }: Props) {
  const [ref, seen] = useInView<HTMLElement>(0.3);
  const style = { "--dl": `${delay}s` } as CSSProperties;
  return createElement(
    as,
    { ref, className: `rise ${seen ? "in" : ""}`.trim(), style },
    <span className="ln">
      <span>{children}</span>
    </span>,
  );
}
