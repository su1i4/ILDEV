"use client";

import InfoTitle from "@/screens/infotitle";
import { Screenshots } from "@/screens/screenshots";
import Technology from "@/screens/technology";
import Card from "@/screens/main/ui/card";
import { OUR_WORKS } from "@/lib/data/card.data";
import RossCargoBanner from "@/screens/main/ui/ross-cargo/ross-cargo-banner";
import { ROSS_CARGO_DATA, ROSS_CARGO_SCREEN } from "@/lib/data/ross-cargo";
import { useEffect, useState } from "react";
import Container from "@/shared/container";
import { useTranslations } from "next-intl";

// ⚠️ Плейсхолдер стека — поставь реальные иконки технологий Ross Cargo
import netframework from "@/assets/images/netframework-1 1.png";
import JavaScript from "@/assets/images/javascript.png";
import C from "@/assets/images/C.png";
import Vue from "@/assets/images/vue.png";

const RossCargo = () => {
  const [isActive, setIsActive] = useState(false);
  const [mounted, setMounted] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full mx-auto container h-[100vh] overflow-y-auto flex flex-col gap-[50px]">
      <RossCargoBanner />

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
              <p className="mb-4">{t("ross-cargo.about.description")}</p>
              <h3 className="font-semibold mb-2">
                {t("ross-cargo.result.mainText")}
              </h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>{t("ross-cargo.result.features.list1")}</li>
                <li>{t("ross-cargo.result.features.list2")}</li>
                <li>{t("ross-cargo.result.features.list3")}</li>
                <li>{t("ross-cargo.result.features.list4")}</li>
              </ul>
            </div>
          </div>
        </Container>
      ) : (
        <Screenshots
          screenshots={ROSS_CARGO_SCREEN(t)}
          projectData={ROSS_CARGO_DATA(t)}
        />
      )}

      <Technology
        title={t("global.technology")}
        technologies={[netframework, JavaScript, C, Vue]}
      />

      <div className="flex flex-wrap lg:flex-col gap-6 max-w-[90%] m-auto my-[100px] md:my-0">
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

export default RossCargo;