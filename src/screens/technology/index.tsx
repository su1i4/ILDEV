import Image, { StaticImageData } from "next/image";
import React from "react";

interface TechnologyProps {
  title: string;
  technologies: (string | StaticImageData)[];
}

const Technology = ({
  title = "Технологии",
  technologies,
}: TechnologyProps) => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center justify-between bg-[#18191E] p-8 pb-6 rounded-2xl w-[90%] m-auto">
        <h1 className="text-[48px] font-medium text-white md:text-[24px]">{title}</h1>
        <div className="flex items-center gap-[50px] mt-[30px] md:gap-[20px]">
          {Array.isArray(technologies) &&
            technologies?.map((image, i) => (
              <Image
                key={i}
                src={image}
                alt={`stack ${i}`}
                className="w-[66px] h-[60px] object-cover md:w-[56px] md:h-[50px]"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Technology;
