import type { CSSProperties, ReactNode } from "react";
import { useInView } from "../hooks/useInView";

type Props = { children: ReactNode; delay?: number; className?: string };

export function RevealItem({ children, delay = 0, className = "" }: Props) {
  const [ref, seen] = useInView<HTMLLIElement>();
  const style = { "--dl": `${delay}s` } as CSSProperties;
  return (
    <li ref={ref} className={`rv ${seen ? "in" : ""} ${className}`.trim()} style={style}>
      {children}
    </li>
  );
}
