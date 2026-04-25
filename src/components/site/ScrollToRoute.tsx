import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToRoute() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [hash, pathname]);

  return null;
}
