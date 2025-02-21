import Technology from "@/screens/technology";
import React from "react";

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

const CargoSystem = () => {
  return (
    <div className="w-full h-[100vh] overflow-y-auto flex flex-col gap-[100px]">
      <CargoSystemBanner />
      <InfoTitle texts={["Описание", "Процесс"]} />
      <Screenshots
        screenshots={CARGO_SYSTEM_SCREEN}
        projectData={CARGO_SYSTEM}
      />
      <Technology
        title="Технологии"
        technologies={[netframework, JavaScript, C, Vue]}
      />
      <div className="flex flex-wrap lg:flex-col gap-6 max-w-[90%] m-auto my-[100px]">
        {OUR_WORKS.splice(2, 3).map((project, index) => (
          <Card
            key={project.title}
            {...project}
            array={OUR_WORKS}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default CargoSystem;
