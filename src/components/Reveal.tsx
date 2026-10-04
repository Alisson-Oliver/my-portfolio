import { createElement, type CSSProperties, type ElementType, type ReactNode } from "react";
import { useInView } from "../hooks/useInView";

type Props = {
  as?: ElementType;
  children: ReactNode;
  delay?: number;
  line?: boolean;
  className?: string;
};

export function Reveal({ as = "div", children, delay = 0, line = true, className = "" }: Props) {
  const [ref, seen] = useInView<HTMLElement>();
  const style = { "--dl": `${delay}s` } as CSSProperties;
  const classes = ["rv", line ? "" : "plain", seen ? "in" : "", className].filter(Boolean).join(" ");
  return createElement(as, { ref, className: classes, style }, children);
}
