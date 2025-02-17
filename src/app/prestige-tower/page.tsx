import InfoTitle from "@/screens/infotitle";
import Technology from "@/screens/technology";
import Container from "@/shared/container";
import Ios from "@/assets/images/ios.png";
import Android from "@/assets/images/android.png";
import Card from "@/screens/main/ui/card";
import { OUR_WORKS } from "@/lib/data/card.data";

const PrestigeTower = () => {
  return (
    <div className="w-full h-[100vh] overflow-y-auto">
      <Container>aasdfd</Container>
      <InfoTitle texts={["Описание", "Процесс"]} />

      <Technology title="Технологии" technologies={[Ios, Android]} />
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

export default PrestigeTower;
