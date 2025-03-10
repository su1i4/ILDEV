"use client";

import React, { useState } from "react";
import Spline from "@splinetool/react-spline";
import { useWindowWidth } from "@/lib/helpers";
export const Animation = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const windowWidth = useWindowWidth();
  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="relative w-full h-full bg-[#121212]">
      <div
        className={`transition-all duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Spline
          scene="https://prod.spline.design/pZiT4Co4SudKISUD/scene.splinecode"
          onLoad={handleLoad}
          style={{
            width: "100%",
            height: windowWidth > 960 ? "100vh" : windowWidth > 451 ? "85vh" : "70vh",
          }}
        />
      </div>
    </div>
  );
};
