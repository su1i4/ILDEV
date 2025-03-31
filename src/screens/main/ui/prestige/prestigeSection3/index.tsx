import { AppScreenshot, ProjectData } from "@/common";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface ScreenshotCardProps {
  title: string;
  images: { className?: string; image: string | StaticImageData }[];
}

const ScreenshotCard: React.FC<ScreenshotCardProps> = ({ title, images }) => {
  return (
    <div>
      <div
        className={`${
          images.length === 1
            ? "w-full"
            : "md:gap-[10px] flex   justify-center gap-[40px]  "
        }`}
      >
        {Array.isArray(images) &&
          images.map(({ image, className }, i) => (
            <div 
              key={i} 
              className="transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:z-10"
            >
              <Image
                src={image}
                alt={title}
                className={`
                  object-contain 
                  w-full 
                  rounded-xl 
                  transition-all 
                  duration-300 
                  ${className}
                  cursor-pointer
                  hover:brightness-110
                  hover:bg-white shadow-lg hover:shadow-white 
                `}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

interface Section3Props {
  projectData: ProjectData;
  screenshots: AppScreenshot[];
}

export const Section3 = ({ projectData, screenshots }: Section3Props) => {
  return (
    <div
      className="bg-[#18191E] rounded-[28px] text-white p-8 text-[24px] font-[400]  ">
      <section className="mb-12 flex gap-[80px] xs:gap-[30px]  leading-[22.6px] sm:flex-col">
        <h2 className="text-2xl font-bold mb-4">Задача</h2>
        <p className="text-white xs:text-[15px]">{projectData.task.description}</p>
      </section>

      <section className="mb-12 flex gap-[40px] sm:flex-col " >
        <h2 className="text-2xl font-bold mb-4">Результат </h2>
        <div >
          <p className="mb-4 xs:text-[15px]">{projectData.result.mainText}</p>
          <ul className="space-y-2 leading-[22.6px] xs:text-[15px] sm:ml-[15px]">
            {projectData.result.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-white  mr-2">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-12 ml-[172px] sm:ml-0">
        <div className="leading-[22.6px] xs:text-[15px]">{projectData.result.mainText2}</div>
        <h2 className="text-2xl xs:text-[15px] font-bold mb-4">
          {projectData.technicalDetails.title}
        </h2>
        <ul className="space-y-2 xs:text-[15px] sm:ml-[15px] ">
          {projectData.technicalDetails.features.map((feature, index) => (
            <li key={index} className="flex  items-start">
              <span className="text-white mr-2">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="leading-[22.6px] xs:text-[15px]">
          {projectData.technicalDetails.title2}
        </div>
      </section>

      <section>
        <div className="flex  xs:flex-wrap">
          {screenshots.map((screenshot) => (
            <ScreenshotCard
              key={screenshot.id}
              title={screenshot.title}
              images={screenshot.images}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
