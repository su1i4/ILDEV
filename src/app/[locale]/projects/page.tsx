import { OUR_WORKS } from "@/lib/data/card.data";
import Card from "@/screens/main/ui/card";
import Container from "@/shared/container";
import { useTranslations } from "next-intl";
import React from "react";

const Projects = () => {
  const t = useTranslations();

  return (
    <div className="w-full h-[100vh] overflow-y-auto">
      <Container className="sm:w-[100%] sm:pb-[30px]">
        <div className="flex justify-between min-h-[204px] xs:min-h-[150px] mt-[70px] items-center sm:flex-col sm:justify-start xs:items-start">
          <h1 className="text-white text-[64px] font-[600] lg:text-[48px] sm:-[32px] xs:text-[20px] leading-[57.6px] max-w-[393px] ">
            НАШИ ПРОЕКТЫ
          </h1>
          <p className="text-white text-[24px] text-[400] max-w-[491px] text-end leading-[21.6px] sm:text-[15px] xs:text-left">
            создаем инновационный софт и сайты, помогая бизнесу расти, жизни
            становиться проще, а миру — умнее
          </p>
        </div>
      </Container>

      <div className="flex flex-wrap lg:flex-col gap-6 max-w-[90%] m-auto mt-[100px]">
        {OUR_WORKS(t).map((project, index) => (
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

export default Projects;
