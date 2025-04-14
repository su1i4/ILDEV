import { IService } from "@/common";

export const ServiceCard = ({ name, image }: IService) => {
  return (
    <div className="keen-slider__slide !min-w-[410px] sm:!min-w-[380px] flex flex-col justify-between items-center xs:!min-w-[300px] sm:h-[400px] xs:h-[300px] h-[450px] rounded-[80px] bg-lightDark">
      <p className="text-[20px] font-[500] p-[40px] xs:text-[15px] ">{name}</p>
     <div className="max-w-[400px] max-h-[315px] w-full h-full  p-1">
     <img
        src={image.src}
        alt={name}
        className="w-full  h-full  sm:h-[260px] xs:h-[170px]  object-contain rounded-[40px]"
      />
     </div>
    </div>
  );
};
