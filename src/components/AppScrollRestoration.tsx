import { useLayoutEffect } from "react";
import {
  ScrollRestoration,
  useLocation,
  useNavigationType,
} from "react-router-dom";

const isFirefox =
  typeof navigator !== "undefined" && /firefox/i.test(navigator.userAgent);

type ScrollPosition = {
  x: number;
  y: number;
};

function getStorageKey(key: string) {
  return `firefox-scroll:${key}`;
}

function readScrollPosition(key: string) {
  const raw = sessionStorage.getItem(getStorageKey(key));

  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw) as ScrollPosition;

    if (typeof parsed.x === "number" && typeof parsed.y === "number") {
      return parsed;
    }
  } catch {
    return null;
  }

  return null;
}

export function AppScrollRestoration() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    if (!isFirefox) {
      return;
    }

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const locationKey =
      location.key || `${location.pathname}${location.search}${location.hash}`;

    requestAnimationFrame(() => {
      if (location.hash) {
        const targetId = decodeURIComponent(location.hash.slice(1));
        const target = document.getElementById(targetId);

        if (target) {
          target.scrollIntoView();
          return;
        }
      }

      if (navigationType === "POP") {
        const previousPosition = readScrollPosition(locationKey);

        if (previousPosition) {
          window.scrollTo(previousPosition.x, previousPosition.y);
          return;
        }
      }

      window.scrollTo(0, 0);
    });

    return () => {
      sessionStorage.setItem(
        getStorageKey(locationKey),
        JSON.stringify({ x: window.scrollX, y: window.scrollY }),
      );
    };
  }, [
    location.hash,
    location.key,
    location.pathname,
    location.search,
    navigationType,
  ]);

  if (isFirefox) {
    return null;
  }

  return <ScrollRestoration />;
}
