"use client";

import { useState, useEffect } from "react";

function useMediaQuery(query: string): boolean {
  const [isMatching, setIsMatching] = useState<null | boolean>(null);

  useEffect(() => {
    // 서버 실행 시 방어코드
    if (typeof window === "undefined") return;

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
