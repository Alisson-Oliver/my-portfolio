import { createContext, useContext } from "react";

export type TransitionValue = {
  goTo: (path: string, hash?: string) => void;
};

export const TransitionContext = createContext<TransitionValue | null>(null);

export function useTransition() {
  const value = useContext(TransitionContext);
  if (!value) throw new Error("useTransition must be used inside TransitionProvider");
  return value;
}
