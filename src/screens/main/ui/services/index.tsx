import { SERVICES } from "@/lib/data";
import { ServiceCard } from "./ui/card";
import { Title } from "@/shared/title";
import { IService } from "@/common";

export const Services = () => {
  return (
    <div className="w-full py-20 flex flex-col gap-20">
      <Title text="Наши услуги" classNames="text-center" />
      <div className="w-full px-24 flex items-center gap-[80px] overflow-x-auto">
        {SERVICES.map((item: IService, index: number) => (
          <ServiceCard {...item} key={index} />
        ))}
      </div>
    </div>
  );
};
