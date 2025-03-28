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
      <div className="flex flex-col items-center justify-between bg-[#18191E] p-8 pb-6 rounded-2xl   mx-auto">
        <h1 className="text-[48px] font-medium text-white">{title}</h1>
        <div className="flex items-center gap-[50px] mt-[30px]">
          {Array.isArray(technologies) &&
            technologies?.map((image, i) => (
              <Image
                key={i}
                src={image}
                alt={`stack ${i}`}
                width={60}
                height={60}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Technology;
