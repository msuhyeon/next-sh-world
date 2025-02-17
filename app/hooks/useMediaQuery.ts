"use client";

import { useState, useEffect } from "react";

function useMediaQuery(query: string): boolean {
  const [isMatching, setIsMatching] = useState<boolean>(() => {
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const updateMatch = (event: MediaQueryListEvent) => {
      setIsMatching(event.matches);
    };

    setIsMatching(mediaQueryList.matches);
    mediaQueryList.addEventListener("change", updateMatch);

    return () => mediaQueryList.removeEventListener("change", updateMatch);
  }, [query]);

  return isMatching;
}

export default useMediaQuery;
