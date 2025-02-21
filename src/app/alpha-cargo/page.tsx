import InfoTitle from "@/screens/infotitle";
import { Screenshots } from "@/screens/screenshots";
import Technology from "@/screens/technology";
import netframework from "@/assets/images/netframework-1 1.png";
import JavaScript from "@/assets/images/javascript.png";
import C from "@/assets/images/C.png";
import Vue from "@/assets/images/vue.png";
import Card from "@/screens/main/ui/card";
import { OUR_WORKS } from "@/lib/data/card.data";
import AlphaCargoBanner from "@/screens/main/ui/alpha-cargo/alpha-cargo-banner";
import { appScreenshots, projectData } from "@/lib/data/alpha.cargo";
// import Container from "@/shared/container";
// import AlphaCargo from "@/screens/main/ui/alpha-cargo";

const AlphaCargoPage = () => {
  return (
    <div className="w-full h-[100vh] overflow-y-auto flex flex-col gap-[100px]">
      <AlphaCargoBanner />
      <InfoTitle texts={["Описание", "Процесс"]} />
      <Screenshots screenshots={appScreenshots} projectData={projectData} />
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

export default AlphaCargoPage;
