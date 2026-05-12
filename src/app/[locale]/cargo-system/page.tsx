"use client";

import React, { useEffect, useState } from "react";
import Technology from "@/screens/technology";

import netframework from "@/assets/images/netframework-1 1.png";
import JavaScript from "@/assets/images/javascript.png";
import C from "@/assets/images/C.png";
import Vue from "@/assets/images/vue.png";
import CargoSystemBanner from "@/screens/main/ui/cargo-system/cargo-system-banner";
import InfoTitle from "@/screens/infotitle";
import { Screenshots } from "@/screens/screenshots";
import { OUR_WORKS } from "@/lib/data/card.data";
import Card from "@/screens/main/ui/card";
import { CARGO_SYSTEM, CARGO_SYSTEM_SCREEN } from "@/lib/data/cargo-system";
import { useTranslations } from "next-intl";
import Container from "@/shared/container";

const CargoSystem = () => {
  const [isActive, setIsActive] = useState(false);
  const [mounted, setMounted] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return ( 
   <div className="h-screen overflow-y-auto">
     <div className="w-full mx-auto container flex flex-col gap-[100px] md:gap-[20px]">
      <CargoSystemBanner /> 
      <InfoTitle
        texts={[t("global.desc"), t("global.proccess")]}
        onClick={() => setIsActive(!isActive)}
      />
      {isActive ? (
        <Container className="md:p-6 md:mt-2">
          <div className="text-white rounded-2xl shadow-lg w-full">
            <div className="flex gap-[20px] items-center">
              <h2 className="text-xl font-semibold mb-4">
                {t("global.proccess")}
              </h2>
              <p className="mb-4">{t("cargosystem.proccess.text")}</p>
            </div>
            <ul className="list-disc list-inside mb-4 ml-[110px] space-y-2 text-[24px] md:ml-0 md:text-[15px]">
              <li>
                <span className="font-semibold">Frontend:</span>
                {t("cargosystem.proccess.frontend")}
              </li>
              <li>
                <span className="font-semibold">Backend:</span>{" "}
                {t("cargosystem.proccess.backend")}
              </li>
              <li>
                <span className="font-semibold">
                  {t("cargosystem.proccess.analithe_title")}
                </span>{" "}
                {t("cargosystem.proccess.analithe")}
              </li>
              <li>
                <span className="font-semibold">
                  {t("cargosystem.proccess.back_title")}
                </span>{" "}
                {t("cargosystem.proccess.devback")}
              </li>
              <li>
                <span className="font-semibold">
                  {t("cargosystem.proccess.front_title")}
                </span>{" "}
                {t("cargosystem.proccess.devfront")}
              </li>
              <li>
                <span className="font-semibold">
                  {t("cargosystem.proccess.devfront")}
                </span>{" "}
                {t("cargosystem.proccess.request_title")}
              </li>
              <li>
                <span className="font-semibold">
                  {t("cargosystem.proccess.qa_title")}
                </span>{" "}
                {t("cargosystem.proccess.qa")}
              </li>
            </ul>
          </div>
        </Container>
      ) : (
        <Screenshots
          screenshots={CARGO_SYSTEM_SCREEN(t)}
          projectData={CARGO_SYSTEM(t)}
        />
      )}

      <Technology
        title={t("global.technology")}
        technologies={[netframework, JavaScript, C, Vue]}
      />
      <div className="flex flex-wrap lg:flex-col gap-6 max-w-[90%] m-auto my-[100px] md:my-0">
        {OUR_WORKS(t)
          .splice(2, 3)
          .map((project, index) => (
            <Card
              key={project.title}
              {...project}
              array={OUR_WORKS(t)}
              index={index}
            />
          ))}
      </div>
    </div>
   </div>
  );
};

export default CargoSystem;
