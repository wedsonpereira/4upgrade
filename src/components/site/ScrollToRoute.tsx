import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NAVBAR_OFFSET = 88;

export function scrollToHash(hash: string) {
  const target = document.querySelector(hash);

  if (!target) {
    return false;
  }

  const top = target.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;
  window.scrollTo({ top: Math.max(0, top), left: 0, behavior: "smooth" });
  return true;
}

export function ScrollToRoute() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const timeoutId = window.setTimeout(() => {
        scrollToHash(hash);
      }, 0);

      return () => window.clearTimeout(timeoutId);
    }

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [hash, pathname]);

  return null;
}
