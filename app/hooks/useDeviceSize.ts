"use client";

import { useMemo } from "react";
import useMediaQuery from "./useMediaQuery";

export default function useDeviceSize() {
  const isDesktop = useMediaQuery("(min-width: 1025px)");
  const isMobile = useMediaQuery("(max-width: 768px)");

  return useMemo(() => ({ isDesktop, isMobile }), [isDesktop, isMobile]);
}
