"use client";

import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { SERVICES } from "@/lib/data/services.data";
import { ServiceCard } from "./ui/card";
import { Title } from "@/shared/title";
import { IService } from "@/common";
import { useTranslations } from "next-intl";

const Services = () => {
  const t = useTranslations();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, slider] = useKeenSlider({
    mode: "free-snap",
    slides: {
      perView: "auto",
      spacing: 20,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: "auto", spacing: 10 },
      },
    },
    created() {
      setLoaded(true);
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  const maxIdx = slider.current?.track.details.maxIdx ?? 0;
  const isFirst = currentSlide === 0;
  const isLast = currentSlide >= maxIdx;

  return (
    <div className="relative w-full overflow-hidden py-20 sm:py-12 xs:py-6">
      {/* плавное тёплое свечение, уходит в прозрачность — без резких граней */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-services-glow bg-[length:150%_150%] animate-glowDrift" />

      <div className="relative z-10 flex flex-col gap-20 sm:gap-12 xs:gap-6">
        <Title text={t("home.service.our_service")} classNames="text-center" />

        <div className="relative">
          <div ref={sliderRef} className="keen-slider px-8 sm:px-4 xs:px-2">
            {SERVICES(t).map((item: IService, index: number) => (
              <ServiceCard {...item} key={index} />
            ))}
          </div>

          {loaded && slider.current && (
            <>
              <button
                type="button"
                onClick={() => slider.current?.prev()}
                disabled={isFirst}
                aria-label="Previous"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-lightOrange text-white shadow-lg shadow-black/30 ring-2 ring-white/20 transition-all duration-300 hover:scale-110 hover:bg-[#db7746] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 sm:h-11 sm:w-11 xs:h-9 xs:w-9"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => slider.current?.next()}
                disabled={isLast}
                aria-label="Next"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-lightOrange text-white shadow-lg shadow-black/30 ring-2 ring-white/20 transition-all duration-300 hover:scale-110 hover:bg-[#db7746] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 sm:h-11 sm:w-11 xs:h-9 xs:w-9"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;