"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import BrandAndFabrica1 from "@/assets/images/brand-fabrica-1.png";
import BrandAndFabrica2 from "@/assets/images/brand-fabrica-2.png";
import { useTranslations } from "next-intl";

const BrandFabricaBanner = () => {
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
    <div className="bg-zinc-900 flex flex-col justify-between gap-[150px] px-6">
      <div className="relative flex ml:flex-col pt-20 lg:pt-32 px-4 lg:px-8 mt-[100px] lg:mt-[70px]">
        <motion.div
          className="container mx-auto lg:max-w-7xl z-10"
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={fadeInUp.transition}
        >
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white leading-tight mb-8 sm:text-4xl">
              BRAND FABRICA
            </h1>
          </div>
        </motion.div>

        <motion.div
          className="relative w-full lg:w-[45%] mt-12 lg:mt-0 lg:absolute lg:right-8 sm:left-[400px] lg:top-1/2 lg:-translate-y-1/2"
          initial={fadeInRight.initial}
          animate={fadeInRight.animate}
          transition={fadeInRight.transition}
        >
          <div className="relative flex justify-center h-[400px] lg:mt-[100px]">
            <div className="w-[501px] h-[501px] rounded-full ml:right-[35%]  bg-custom-gradient absolute"></div>

            <motion.div
              className="z-[2] mt-[100px] w-[610px] ml:w-[200px]"
              initial={imageAnimation.initial}
              animate={imageAnimation.animate}
              transition={imageAnimation.transition}
            >
              <Image
                src={BrandAndFabrica1}
                alt="Desktop view"
                className="rounded-lg object-cover -rotate-[5deg] shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
            <motion.div
              className="absolute z-[55] left-[100px] ml:w-[365px]"
              initial={imageAnimation.initial}
              animate={imageAnimation.animate}
              transition={{ ...imageAnimation.transition, delay: 0.6 }}
            >
              <Image
                src={BrandAndFabrica2}
                alt="Mobile view"
                className="rounded-lg w-[365px] rotate-[10deg] shadow-xl object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="py-8 lg:py-[350px] px-4 lg:px-8 sm:py-[100px] sm:pb-[0]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div>
          <div className="flex ml:gap-8 gap-[182px] sm:flex-col">
            <h2 className="text-2xl font-bold lg:font-medium text-white text-nowrap">
              {t("brandfabrica.aboutProject.title")}
            </h2>
            <div className="flex flex-col leading-[22.6px] text-[24px]">
              <p className="lg:text-xl text-gray-300 max-w-3xl">
                {t("brandfabrica.aboutProject.description")}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-[40px]">
            <h1 className="text-[32px] font-medium sm:text-[20px]">
              {" "}
              {t("brandfabrica.projectNumbers.title")}
            </h1>
            <div className="flex gap-[20px] text-white rounded-lg">
              <div className="flex-1 border border-gray-700 p-[30px]">
                <p className="text-[64px] font-bold sm:text-[26px] sm:font-bold">
                  {t("brandfabrica.projectNumbers.client.value")}
                </p>
                <p className="text-[48px] font-medium sm:text-[26px] sm:font-bold">
                  {t("brandfabrica.projectNumbers.client.label")}
                </p>
              </div>
              <div className="flex-1 border border-gray-700 p-[30px]">
                <p className="text-[64px] font-bold sm:text-[26px] sm:font-bold">
                  4.6
                </p>
                <p className="text-[48px] font-medium leading-[43.2px] sm:text-[26px] sm:font-bold sm:leading-[30px]">
                  {t("brandfabrica.projectNumbers.team.label")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BrandFabricaBanner;
