"use client";

import { useEffect, useState } from "react";
import InfoTitle from "@/screens/infotitle";
import { Screenshots } from "@/screens/screenshots";
import netframework from "@/assets/images/netframework-1 1.png";
import JavaScript from "@/assets/images/javascript.png";
import C from "@/assets/images/C.png";
import Vue from "@/assets/images/vue.png";
import Card from "@/screens/main/ui/card";
import { OUR_WORKS } from "@/lib/data/card.data";
import AlphaCargoBanner from "@/screens/main/ui/alpha-cargo/alpha-cargo-banner";
import { appScreenshots, projectData } from "@/lib/data/alpha.cargo";
import Container from "@/shared/container";
import { useTranslations } from "next-intl";
import Technology from "@/screens/technology";

const AlphaCargoPage = () => {
  const [isActive, setIsActive] = useState(false);
  const t = useTranslations();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div>{t("global.download")}...</div>;
  return (
    <div className="w-full h-[100vh] overflow-y-auto" >
      <div className="w-full container mx-auto flex flex-col gap-[100px] sm:gap-[80px]">
        <AlphaCargoBanner />
        <InfoTitle
          texts={[t("global.desc"), t("global.proccess")]}
          onClick={() => setIsActive(!isActive)}
        />
        {isActive ? (
          <Container className="md:p-[20px]">
            <div className="flex gap-[40px] md:flex-col md:gap-[10px]">
              <h2 className="text-[24px] font-medium mb-4">
                {t("global.proccess")}
              </h2>
              <div className="text-[24px] font-[400] leading-[23.6px] md:text-[15px]">
                <p className="mb-4">
                  {t("alpha-cargo.technology.introduction")}
                </p>
                <p className="mb-4">
                  {t.rich("alpha-cargo.technology.frontend", {
                    bold: (chunks) => (
                      <span className="font-semibold">{chunks}</span>
                    ),
                  })}
                </p>
                <p className="mb-4">
                  {t.rich("alpha-cargo.technology.backend", {
                    bold: (chunks) => (
                      <span className="font-semibold">{chunks}</span>
                    ),
                  })}
                </p>
                <ul className="list-disc list-inside mb-4">
                  <li>{t("alpha-cargo.technology.backendBenefits.point1")}</li>
                  <li>{t("alpha-cargo.technology.backendBenefits.point2")}</li>
                </ul>
                <h3 className="text-lg font-semibold mb-2">
                  {t("alpha-cargo.technology.challengesTitle")}
                </h3>
                <ol className="list-decimal list-inside space-y-2 mt-[30px]">
                  <li>
                    <span className="font-semibold">
                      {t("alpha-cargo.technology.challenges.item1.title")}
                    </span>{" "}
                    {t("alpha-cargo.technology.challenges.item1.description")}
                  </li>
                  <li>
                    <span className="font-semibold">
                      {t("alpha-cargo.technology.challenges.item2.title")}
                    </span>{" "}
                    {t("alpha-cargo.technology.challenges.item2.description")}
                  </li>
                  <li>
                    <span className="font-semibold">
                      {t("alpha-cargo.technology.challenges.item3.title")}
                    </span>{" "}
                    {t("alpha-cargo.technology.challenges.item3.description")}
                  </li>
                  <li>
                    <span className="font-semibold">
                      {t("alpha-cargo.technology.challenges.item4.title")}
                    </span>{" "}
                    {t("alpha-cargo.technology.challenges.item4.description")}
                  </li>
                  <li>
                    <span className="font-semibold">
                      {t("alpha-cargo.technology.challenges.item5.title")}
                    </span>{" "}
                    {t("alpha-cargo.technology.challenges.item5.description")}
                  </li>
                </ol>
                <p className="mt-4">{t("alpha-cargo.technology.conclusion")}</p>
              </div>
            </div>
          </Container>
        ) : (
          <Screenshots
            screenshots={appScreenshots(t)}
            projectData={projectData(t)}
          />
        )}
        <Technology
          title={t("global.technology")}
          technologies={[netframework, JavaScript, C, Vue]}
        />
        <div className="flex flex-wrap lg:flex-col gap-6  my-[100px] sm:my-0 md:mx-[20px]">
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
    </div>
  );
};

export default AlphaCargoPage;
