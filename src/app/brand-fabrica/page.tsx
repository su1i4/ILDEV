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

const BrandFabrica = () => {
  return (
    <div className="w-full h-[100vh] overflow-y-auto flex flex-col gap-[100px]">
      <BrandFabricaBanner />
      <InfoTitle texts={["Описание", "Процесс"]} />
      <Screenshots
        screenshots={BRAND_FABRICA_SCREEN}
        projectData={BRAND_FABRICA}
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

export default BrandFabrica;
