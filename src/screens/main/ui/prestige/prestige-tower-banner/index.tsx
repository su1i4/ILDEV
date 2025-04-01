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
    <div className="min-h-[100h] flex flex-col gap-10 justify-between px-6">
      <div className="relative flex ml:flex-col flex-row items-center pt-20  px-4  mt-[100px] sm:mt-[60px]">
        <motion.div
          className="container mx-auto lg:max-w-7xl z-10 sm:text-[15px]"
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={fadeInUp.transition}
        >
          <div className="max-w-3xl ">
            <h1 className="text-5xl  ml:text-[40px]  lg:text-[38px] xs:text-[20px]  font-bold text-white leading-tight mb-8 ">
              {t("prestige-tower.title")}
            </h1>
          </div>
        </motion.div>

        <motion.div
          className="relative w-full   mt-12   lg:absolute  lg:top-[60%]"
          initial={fadeInRight.initial}
          animate={fadeInRight.animate}
          transition={fadeInRight.transition}
        >
          <div className="relative flex justify-center    h-[400px]   lg:h-[600px]">
            <div className="w-[501px] h-[501px] md:w-[450px]  md:h-[450px] sm:w-[300px] sm:h-[300px] xs:w-[300px] xs:h-[300px]  xs:top-[50px] rounded-full bg-custom-gradient absolute  "></div>

            <motion.div
              className="absolute left-0   top-[90px] z-[2] max-w-[650px] w-full  ml:max-w-[700px]  md:w-[600px] xs:w-[370px] xs:h-[190px] xs:left-0 xs:top-[125px]  ms:w-[350px]  lg:left-[45px] lg:top-[60px]   md:top-[60px] "
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
              className="absolute right-0  z-[1] w-[433px] md:w-[300px]   xs:w-[255px] ms:w-[240px] xs:h-[140px] xs:top-[70px] lg:w-[434px] lg:h-[209px]  "
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
        className="py-8  ms:py-0 md:mt-[300px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="flex md:flex-col gap-[182px] md:gap-[20px]">
          <h2 className="text-2xl lg:text-3xl xs:text-[20px] font-bold text-white whitespace-normal lg:whitespace-nowrap">
            {t("prestige-tower.about_projects")}
          </h2>
          <p className="text-lg lg:text-xl xs:text-[15px] text-gray-300 max-w-3xl">
            {t("prestige-tower.projects_desc")}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default PrestigeTowerBanner;
