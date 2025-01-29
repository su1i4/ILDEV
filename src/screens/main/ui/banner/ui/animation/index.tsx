"use client";

import React, { useState } from "react";
import Spline from "@splinetool/react-spline";

export const Animation = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="relative w-full h-screen bg-[#121212]">
      <div
        className={`transition-all duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Spline
          scene="https://prod.spline.design/pZiT4Co4SudKISUD/scene.splinecode"
          onLoad={handleLoad}
        />
      </div>
    </div>
  );
};
