import { useCallback, useEffect, useMemo, useRef, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TransitionContext } from "./transition";

const COVER_MS = 520;
const TOTAL_MS = 1060;

export function TransitionProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const wipe = useRef<HTMLDivElement>(null);
  const busy = useRef(false);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach((id) => window.clearTimeout(id));
  }, []);

  const goTo = useCallback(
    (path: string, hash?: string) => {
      if (busy.current) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const behavior = reduce ? "auto" : "smooth";
      const target = hash ? `${path}#${hash}` : path;

      if (pathname === path) {
        if (hash) document.getElementById(hash)?.scrollIntoView({ behavior });
        else window.scrollTo({ top: 0, behavior });
        return;
      }

      const cover = wipe.current;
      if (reduce || !cover) {
        navigate(target);
        window.scrollTo(0, 0);
        return;
      }

      busy.current = true;
      cover.style.transition = "none";
      cover.style.transform = "translateY(100%)";
      void cover.offsetHeight;
      cover.style.transition = `transform ${COVER_MS}ms cubic-bezier(.7,0,.2,1)`;
      cover.style.transform = "translateY(0)";

      timers.current.push(
        window.setTimeout(() => {
          navigate(target);
          window.scrollTo(0, 0);
          cover.style.transform = "translateY(-100%)";
        }, COVER_MS),
        window.setTimeout(() => {
          cover.style.transition = "none";
          cover.style.transform = "translateY(100%)";
          busy.current = false;
        }, TOTAL_MS),
      );
    },
    [navigate, pathname],
  );

  const value = useMemo(() => ({ goTo }), [goTo]);

  return (
    <TransitionContext.Provider value={value}>
      {children}
      <div ref={wipe} className="wipe" aria-hidden="true" />
    </TransitionContext.Provider>
  );
}
