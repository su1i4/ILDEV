"use client";

import React, { useState, useCallback, useMemo } from "react";
import dynamic from "next/dynamic";
import { useWindowWidth } from "@/lib/helpers";

// Spline грузится только на клиенте и только когда компонент реально нужен
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-[#121212]" />,
});

// Брейкпоинт для отключения 3D на слабых устройствах
const MOBILE_BREAKPOINT = 768;

export const Animation = React.memo(() => {
  const [isLoaded, setIsLoaded] = useState(false);
  const windowWidth = useWindowWidth();

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  // Считаем высоту через useMemo — не пересоздаём объект style на каждый ререндер
  const splineStyle = useMemo(
    () => ({
      width: "100%",
      height:
        windowWidth > 960 ? "100vh" : windowWidth > 451 ? "85vh" : "70vh",
    }),
    [windowWidth]
  );

  // На мобилках вообще не монтируем Spline — показываем статичный фон/постер
  const isMobile = windowWidth > 0 && windowWidth < MOBILE_BREAKPOINT;

  if (isMobile) {
    return (
      <div
        className="relative w-full h-full bg-[#121212]"
        style={{ height: "70vh" }}
        aria-hidden="true"
      >
        {/* сюда можно положить статичный poster.webp от Spline-сцены */}
      </div>
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