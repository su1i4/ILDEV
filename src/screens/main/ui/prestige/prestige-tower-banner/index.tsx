"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import PrestigetowerImage1 from "@/assets/images/prestige-tower-1.png";
import PrestigetowerImage2 from "@/assets/images/prestige-tower-2.png";
import { useTranslations } from "next-intl";

const PrestigeTowerBanner = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, delay: 0.3 },
  };

  const imageAnimation = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.8, delay: 0.4 },
  };

  const t = useTranslations();

  return (
    <div className="min-h-screen bg-zinc-900 flex flex-col justify-between px-6">
      <div className="relative flex lg:flex-col flex-row items-center pt-20 lg:pt-32 px-4 lg:px-8 mt-[100px]">
        <motion.div
          className="container mx-auto lg:max-w-7xl z-10"
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={fadeInUp.transition}
        >
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-4xl lg:text-6xl font-bold text-white leading-tight mb-8">
              {t("prestige-tower.title")}
            </h1>
          </div>
        </motion.div>

        <motion.div
          className="relative w-full lg:w-[45%] mt-12 lg:mt-0 lg:absolute lg:right-8 lg:top-1/2 lg:-translate-y-1/2"
          initial={fadeInRight.initial}
          animate={fadeInRight.animate}
          transition={fadeInRight.transition}
        >
          <div className="hidden lg:block w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[501px] lg:h-[501px] rounded-full bg-blue-900 absolute z-0 -top-[50px]"></div>

          <div className="relative flex justify-center lg:justify-start h-[400px] lg:h-[600px]">
            <div className="w-[501px] h-[501px] rounded-full bg-custom-gradient absolute "></div>

            <motion.div
              className="absolute left-0 lg:-left-[120px] top-[20px] z-[2] w-[610px] md:w-[350px] lg:w-auto"
              initial={imageAnimation.initial}
              animate={imageAnimation.animate}
              transition={imageAnimation.transition}
            >
              <Image
                src={PrestigetowerImage1}
                alt="Desktop view"
                className="rounded-lg object-cover shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
            <motion.div
              className="absolute right-0 lg:left-[200px] lg:-bottom-[200px] z-[1] w-[433px] md:w-[300px] lg:w-auto"
              initial={imageAnimation.initial}
              animate={imageAnimation.animate}
              transition={{ ...imageAnimation.transition, delay: 0.6 }}
            >
              <Image
                src={PrestigetowerImage2}
                alt="Mobile view"
                className="rounded-lg shadow-xl object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="py-8 lg:py-16 px-4 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="">
          <div className="flex lg:gap-32 gap-[182px]">
            <h2 className="text-2xl lg:text-3xl font-bold text-white whitespace-normal lg:whitespace-nowrap">
              {t("prestige-tower.about_projects")}
            </h2>
            <p className="text-lg lg:text-xl text-gray-300 max-w-3xl">
              {t("prestige-tower.projects_desc")}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PrestigeTowerBanner;
