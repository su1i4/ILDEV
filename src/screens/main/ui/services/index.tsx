"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { SERVICES } from "@/lib/data/services.data";
import { ServiceCard } from "./ui/card";
import { Title } from "@/shared/title";
import { IService } from "@/common";
import { useTranslations } from "next-intl";

const Services = () => {
  const [sliderRef, slider] = useKeenSlider({
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 20,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(max-width: 768px)": {
        slides: { perView: 1, spacing: 10 },
      },
    },
  });

  const t = useTranslations();

  return (
    <div className="w-full py-20 sm:py-12 xs:py-6 flex flex-col gap-20 sm:gap-12 xs:gap-6">
      <Title text={t("home.service.our_service")} classNames="text-center  " />
      <div ref={sliderRef} className="keen-slider px-8 sm:px-4 xs:px-2">
        {SERVICES(t).map((item: IService, index: number) => (
          <ServiceCard {...item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
