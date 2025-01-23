import { IService } from "@/common";

export const ServiceCard = ({ name, image }: IService) => {
  return (
    <div className="keen-slider__slide !min-w-[410px] h-[450px] rounded-[80px] bg-lightDark">
      <p className="text-[20px] font-[500] p-[40px]">{name}</p>
      <img
        src={image.src}
        alt={name}
        className="w-full h-full object-cover rounded-[40px]"
      />
    </div>
  );
};
