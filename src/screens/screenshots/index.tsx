import { appScreenshots, projectData } from "@/lib/data/alpha.cargo";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface ScreenshotCardProps {
  title: string;
  images: string | StaticImageData[];
}

const ScreenshotCard: React.FC<ScreenshotCardProps> = ({ title, images }) => {
  return (
    <div className="rounded-lg overflow-hidden">
      <div className="p-4">
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
      <div
        className={`${
          images.length === 1
            ? "w-full"
            : "grid grid-flow-col grid-cols-2 auto-cols-max gap-[20px] md:gap-[10px]  overflow-x-scroll scrollbar-hide"
        }`}
      >
        {Array.isArray(images) &&
          images.map((image, i) => (
            <Image
              key={i}
              src={image}
              alt={title}
              className="object-cover w-full h-auto"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
            />
          ))}
      </div>
    </div>
  );
};

export const Screenshots: React.FC = () => {
  return (
    <div className="bg-[#18191E] text-white p-8">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Задача</h2>
        <p className="text-gray-300">{projectData.task.description}</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Результат</h2>
        <p className="text-gray-300 mb-4">{projectData.result.mainText}</p>
        <ul className="space-y-2">
          {projectData.result.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">
          {projectData.technicalDetails.title}
        </h2>
        <ul className="space-y-2">
          {projectData.technicalDetails.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Приложение</h2>
        <div className="grid grid-cols-1  gap-6">
          {appScreenshots.map((screenshot) => (
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
