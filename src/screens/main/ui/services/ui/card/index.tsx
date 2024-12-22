import { IService } from "@/common";
import { twMerge } from "tailwind-merge";

export const ServiceCard = ({ name, icons }: IService) => {
  return (
    <div className="!min-w-[410px] h-[450px] rounded-[80px] bg-lightDark">
      <p className="text-[24px] font-[500] p-[40px]">{name}</p>
      <div className="w-full h-[333px] relative">
        {icons.map((item, index) => (
          <div key={index} className={twMerge("", item.classNames)}>
            {item.component}
          </div>
        ))}
      </div>
    </div>
  );
};
