import { OUR_WORKS } from "@/lib/data/card.data";
import Card from "@/screens/main/ui/card";
import Container from "@/shared/container";
import React from "react";

const Projects = () => {
  return (
    <div className="w-full h-[100vh] overflow-y-auto">
      <Container>
        <div className="flex justify-between min-h-[304px] mt-[100px] items-center">
          <h1 className="text-white text-[64px] font-[600] leading-[57.6px] max-w-[393px]">
            НАШИ ПРОЕКТЫ
          </h1>
          <p className="text-white text-[24px] text-[400] max-w-[491px] text-end">
            создаем инновационный софт и сайты, помогая бизнесу расти, жизни
            становиться проще, а миру — умнее
          </p>
        </div>
      </Container>

      <div className="flex flex-wrap lg:flex-col gap-6 max-w-[90%] m-auto mt-[100px]">
        {OUR_WORKS.map((project, index) => (
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

export default Projects;
