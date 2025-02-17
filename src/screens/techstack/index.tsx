import { Tech } from "@/common";
import { techStack } from "@/lib/data/techstacks";
import Image from "next/image";

const TechCard = ({ title, icons = [], description }: Tech) => (
  <div className="bg-[#18191E] text-white p-6 rounded-xl shadow-lg flex flex-col gap-[30px]">
    <div className="flex items-center justify-between gap-2 text-[32px] font-medium">
      {title}{" "}
      <div className="flex items-center gap-[20px]">
        {icons.map((icon, index) => (
          <Image key={index} src={icon} alt={title} width={40} height={40} />
        ))}
      </div>
    </div>
    <p className="text-white text-[18px] text-[300]">{description}</p>
  </div>
);

const TechStack = () => {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-white mb-8">Стек / Технологии</h2>
      <div className="grid grid-cols-3 gap-x-5 gap-y-7">
        {techStack.map((tech, index) => (
          <TechCard key={index} {...tech} />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
