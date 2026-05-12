"use client";

import React, { useState, useCallback, useMemo } from "react";
import dynamic from "next/dynamic";
import { useWindowWidth } from "@/lib/helpers";

// v4+ требует subpath /next или /lazy
const Spline = dynamic(
  () => import("@splinetool/react-spline/next").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => <div className="w-full h-full bg-[#121212]" />,
  }
);

const MOBILE_BREAKPOINT = 768;

export const Animation = React.memo(() => {
  const [isLoaded, setIsLoaded] = useState(false);
  const windowWidth = useWindowWidth();

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const splineStyle = useMemo(
    () => ({
      width: "100%",
      height:
        windowWidth > 960 ? "100vh" : windowWidth > 451 ? "85vh" : "70vh",
    }),
    [windowWidth]
  );

  const isMobile = windowWidth > 0 && windowWidth < MOBILE_BREAKPOINT;

  if (isMobile) {
    return (
      <div
        className="relative w-full h-full bg-[#121212]"
        style={{ height: "70vh" }}
        aria-hidden="true"
      />
    );
  }

  return (
    <div className="relative w-full h-full bg-[#121212]">
      <div
        className={`transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Spline
          scene="https://prod.spline.design/pZiT4Co4SudKISUD/scene.splinecode"
          onLoad={handleLoad}
          style={splineStyle}
        />
      </div>
    </div>
  );
});

Animation.displayName = "Animation";