"use client";

import { useEffect } from "react";

export const ScrollToForm = () => {
  useEffect(() => {
    if (window.location.hash !== "#form") return;

    let count = 0;
    const id = setInterval(() => {
      document
        .getElementById("form")
        ?.scrollIntoView({ block: "start" });
      // повторяем ~1.2с, чтобы пережить layout shift от ленивых секций
      if (++count >= 6) clearInterval(id);
    }, 200);

    return () => clearInterval(id);
  }, []);

  return null;
};