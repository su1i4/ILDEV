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
      <h2 className="text-[32px] font-medium mb-6 sm:mb-0">{title}</h2>
      <div
        className={`${
          images.length === 1
            ? "w-full"
            : "md:gap-[10px] flex flex-wrap justify-center gap-[50px] "
        }`}
      >
        {Array.isArray(images) &&
          images.map(({ image, className }, i) => (
            <div key={i}>
              <Image
                src={image}
                alt={title}
                className={`object-contain w-full rounded-xl ${className}`}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

interface ScreenshotsProps {
  projectData: ProjectData;
  screenshots: AppScreenshot[];
}

export const Screenshots = ({ projectData, screenshots }: ScreenshotsProps) => {
  return (
    <div className="bg-[#18191E] text-white p-8 text-[24px] font-[400] text-[24px] font-[400]">
      <section className="mb-12 flex gap-[80px] leading-[22.6px] md:flex-col md:gap-[20px]">
        <h2 className="text-2xl font-bold mb-4">Задача</h2>
        <p className="text-white md:text-[15px] sm:font-[400]">
          {projectData.task.description}
        </p>
      </section>

      <section className="mb-12 flex gap-[40px] md:flex-col md:gap-[20px]">
        <h2 className="text-2xl font-bold mb-4">Результат</h2>
        <div>
          <ul className="space-y-2 leading-[22.6px] sm:leading-[18px] md:text-[16px]">
            {projectData.result.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-12 ml-[172px] md:ml-0">
        <div className="leading-[22.6px]">{projectData.result.mainText2}</div>
        <h2 className="text-2xl font-bold mb-4 ">
          {projectData.technicalDetails.title}
        </h2>
        <ul className="space-y-2 md:text-[15px]">
          {projectData.technicalDetails.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="leading-[22.6px]">
          {projectData.technicalDetails.title2}
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 gap-6">
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
