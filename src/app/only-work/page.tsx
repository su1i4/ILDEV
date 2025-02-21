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

const OnlyWork = () => {
  return (
    <div className="w-full h-[100vh] overflow-y-auto">
      <OnlyWorkBanner />
      <InfoTitle texts={["Описание", "Процесс"]} />
      <Screenshots
        screenshots={ONLY_WORK_SCREEN}
        projectData={ONLY_WORK_DATA}
      />
      <Technology
        title="Технологии"
        technologies={[netframework, JavaScript, C, Vue]}
      />
      <div className="flex flex-wrap lg:flex-col gap-6 max-w-[90%] m-auto my-[100px]">
        {OUR_WORKS.splice(0, 2).map((project, index) => (
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

export default OnlyWork;
