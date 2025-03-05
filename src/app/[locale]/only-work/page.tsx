"use client";

import InfoTitle from "@/screens/infotitle";
import { Screenshots } from "@/screens/screenshots";
import Technology from "@/screens/technology";
import netframework from "@/assets/images/netframework-1 1.png";
import JavaScript from "@/assets/images/javascript.png";
import C from "@/assets/images/C.png";
import Vue from "@/assets/images/vue.png";
import Card from "@/screens/main/ui/card";
import { OUR_WORKS } from "@/lib/data/card.data";
import OnlyWorkBanner from "@/screens/main/ui/only-work/only-work-banner";
import { ONLY_WORK_DATA, ONLY_WORK_SCREEN } from "@/lib/data/only-work";
import { useEffect, useState } from "react";
import Container from "@/shared/container";
import { useTranslations } from "next-intl";

const OnlyWork = () => {
  const [isActive, setIsActive] = useState(false);
  const [mounted, setMounted] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className="w-full h-[100vh] overflow-y-auto flex flex-col gap-[50px]">
      <OnlyWorkBanner />
      <InfoTitle
        texts={[t("global.desc"), t("global.proccess")]}
        onClick={() => setIsActive(!isActive)}
      />
      {isActive ? (
        <Container>
          <div className="flex gap-[40px]">
            <h2 className="text-[24px] font-medium mb-4">
              {t("global.proccess")}
            </h2>
            <div className="text-[24px] font-[400]">
              <p className="mb-4">
                {t("only-work.developmentProcess.introduction")}
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>
                  <span className="font-semibold">Frontend:</span>{" "}
                  {t("only-work.developmentProcess.technologies.frontend")}
                </li>
                <li>
                  <span className="font-semibold">Backend:</span>{" "}
                  {t("only-work.developmentProcess.technologies.backend")}
                </li>
                <li>
                  <span className="font-semibold">
                    {t("only-work.developmentProcess.steps.analith")}
                  </span>{" "}
                  {t("only-work.developmentProcess.steps.analysisAndDesign")}
                </li>
                <li>
                  <span className="font-semibold">
                    {t("only-work.developmentProcess.steps.dev")}
                  </span>{" "}
                  {t("only-work.developmentProcess.steps.backendDevelopment")}
                </li>
                <li>
                  <span className="font-semibold">
                    {t("only-work.developmentProcess.steps.dev_front")}
                  </span>{" "}
                  {t("only-work.developmentProcess.steps.frontendDevelopment")}
                </li>
                <li>
                  <span className="font-semibold">
                    {t("only-work.developmentProcess.steps.integration")}
                  </span>{" "}
                  {t("only-work.developmentProcess.steps.moduleIntegration")}
                </li>
                <li>
                  <span className="font-semibold">
                    {t("only-work.developmentProcess.steps.qa_ceo")}
                  </span>{" "}
                  {t(
                    "only-work.developmentProcess.steps.testingAndOptimization"
                  )}
                </li>
              </ul>
            </div>
          </div>
        </Container>
      ) : (
        <Screenshots
          screenshots={ONLY_WORK_SCREEN(t)}
          projectData={ONLY_WORK_DATA(t)}
        />
      )}
      <Technology
        title={t("global.technology")}
        technologies={[netframework, JavaScript, C, Vue]}
      />
      <div className="flex flex-wrap lg:flex-col gap-6 max-w-[90%] m-auto my-[100px]">
        {OUR_WORKS(t)
          .splice(0, 2)
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

export default OnlyWork;
