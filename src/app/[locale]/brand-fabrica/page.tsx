"use client";

import { useEffect, useState } from "react";
import { OUR_WORKS } from "@/lib/data/card.data";
import InfoTitle from "@/screens/infotitle";
import Card from "@/screens/main/ui/card";
import { Screenshots } from "@/screens/screenshots";
import Technology from "@/screens/technology";
import netframework from "@/assets/images/netframework-1 1.png";
import JavaScript from "@/assets/images/javascript.png";
import C from "@/assets/images/C.png";
import Vue from "@/assets/images/vue.png";
import BrandFabricaBanner from "@/screens/main/ui/brand-fabrica";
import { BRAND_FABRICA, BRAND_FABRICA_SCREEN } from "@/lib/data/brand-fabrica";
import Container from "@/shared/container";
import { useTranslations } from "next-intl";

const BrandFabrica = () => {
  const [isActive, setIsActive] = useState(false);
  const [mounted, setMounted] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className="w-full h-[100vh] mx-auto container overflow-y-auto flex flex-col gap-[100px] md:gap-[40px] mx-container">
      <BrandFabricaBanner />
      <InfoTitle
        texts={[t("global.desc"), t("global.proccess")]}
        onClick={() => setIsActive(!isActive)}
      />
      {isActive ? (
        <Container className="md:p-[20px]">
          <div className="flex gap-[40px] md:flex-col md:gap-[20px]">
            <h2 className="text-[24px] font-medium mb-4">
              {t("global.proccess")}
            </h2>
            <section className="text-[24px] font-[400] md:text-[15px]">
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>
                  <span className="font-semibold">Frontend:</span>{" "}
                  {t("brandfabrica.details.frontend.title")}
                </li>
                <li>
                  <span className="font-semibold">Backend:</span>{" "}
                  {t("brandfabrica.details.backend.title")}
                </li>
              </ul>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  <span className="font-semibold">
                    {t("brandfabrica.stages.list1.title")}
                  </span>{" "}
                  {t("brandfabrica.stages.list1.description")}
                </li>
                <li>
                  <span className="font-semibold">
                    {t("brandfabrica.stages.list2.title")}
                  </span>{" "}
                  {t("brandfabrica.stages.list2.description")}
                </li>
                <li>
                  <span className="font-semibold">
                    {t("brandfabrica.stages.list3.title")}
                  </span>{" "}
                  {t("brandfabrica.stages.list3.description")}
                </li>
                <li>
                  <span className="font-semibold">
                    {t("brandfabrica.stages.list4.title")}
                  </span>{" "}
                  {t("brandfabrica.stages.list4.description")}
                </li>
                <li>
                  <span className="font-semibold">
                    {t("brandfabrica.stages.list5.title")}
                  </span>{" "}
                  {t("brandfabrica.stages.list5.description")}
                </li>
              </ol>
            </section>
          </div>
        </Container>
      ) : (
        <Screenshots
          screenshots={BRAND_FABRICA_SCREEN(t)}
          projectData={BRAND_FABRICA(t)}
        />
      )}

      <Technology
        title={t("global.technology")}
        technologies={[netframework, JavaScript, C, Vue]}
      />
      <div className="flex flex-wrap lg:flex-col gap-6 max-w-[90%] m-auto my-[100px] md:my-0">
        {OUR_WORKS(t)
          .slice(2, 4)
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
  );
};

export default BrandFabrica;
