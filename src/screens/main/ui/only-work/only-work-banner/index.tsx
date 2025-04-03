"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import SignInImage from "@/assets/images/signin-image.png";
import DashboardLaptop from "@/assets/images/dashboard-laptop.png";
import { useTranslations } from "next-intl";

const OnlyWorkBanner = () => {
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
    <div className="bg-zinc-900 flex flex-col justify-between gap-[150px] px-6 lg:gap-[40px] rounded-3xl">
      <div className="relative flex lg:flex-col flex-row items-center pt-20  sm:pt-0 px-4 lg:px-8 mt-[100px]">
        <motion.div
          className="container mx-auto lg:max-w-7xl z-10"
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={fadeInUp.transition}
        >
          <div className="max-w-3xl">
            <h1 className="text-5xl  md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8 sx!:text-[24px] sm:text-[32px] xs:text-[28px]">
              ONLY WORK
            </h1>
          </div>
        </motion.div>

        <motion.div
          className="relative w-full lg:w-[45%] mt-12 lg:mt-0  lg:right-8 lg:top-1/1 lg:-translate-y-1/2"
          initial={fadeInRight.initial}
          animate={fadeInRight.animate}
          transition={fadeInRight.transition}
        >
          <div className="relative flex justify-center items-center lg:justify-start h-[400px] lg:h-[600px]  ">
            <div className="w-[501px] h-[501px] rounded-full bg-custom-gradient absolute sm:w-[400px] sm:h-[400px] sm:-left-[50px]  xs:w-[350px] xs:h-[350px] xs:-left-[80px] "></div>

            <motion.div
              className="absolute left-0 lg:-left-[120px] top-[100px] w-[410px] md:w-[350px]  lg:top-[5px]   sm:top-10 xs:w-[320px] md:-right-[80px] xs:-left-[90px]  xs:top-[50px] ms:w-[310px]  ms:-left-[80px]  lg:w-auto   transform rotate-[20deg]"
              initial={imageAnimation.initial}
              animate={imageAnimation.animate}
              transition={imageAnimation.transition}
            >
              <Image
                src={DashboardLaptop}
                alt="Desktop view"
                className="  object-cover shadow-lg hover:scale-105 transition-transform duration-300 rotate-6 lg:mt-40"
              />
            </motion.div>
            <motion.div
              className="absolute  lg:left-[200px]  z-[1] w-[316px] top-[10px]  right-[60px] lg:top-[60px]   md:w-[300px] sm:max-w-[250px]  xs:w-[220px] xs:top-[150px]  xs:left-[60px] ms:w-[205px]"
              initial={imageAnimation.initial}
              animate={imageAnimation.animate}
              transition={{ ...imageAnimation.transition, delay: 0.6 }}
            >
              <Image
                src={SignInImage}
                alt="Mobile view"
                className="  shadow-xl object-cover hover:scale-105 transition-transform duration-300 rotate-[-9deg] lg:mb-32"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="py-8 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="">
          <div className="flex lg:gap-32  sm:flex-col gap-[182px] xs:gap-[50px]">
            <h2 className="text-2xl lg:text-3xl font-bold text-white whitespace-normal lg:whitespace-nowrap">
              {t("only-work.about.title")}
            </h2>
            <p className="text-[24px] lg:text-xl text-[#FFFFFF] max-w-5xl">
              {t("only-work.about.description")}
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-[104px]">
            <h1 className="text-[32px] font-medium lg:text-[24px]">
              {t("only-work.stats.title")}
            </h1>
            <div className="flex gap-[20px] text-white  xs:flex-col rounded-lg">
              <div className="flex-1 border border-gray-700 p-[30px] ">
                <p className="text-[64px] font-bold sm:text-[32px] ">
                  {t("only-work.stats.users.number")}
                </p>
                <p className="text-[48px] font-medium sm:text-[32px] ">
                  {t("only-work.stats.users.label")}
                </p>
              </div>
              <div className="flex-1 border border-gray-700 p-[30px]  ">
                <p className="text-[64px] font-bold sm:text-[32px] ">4</p>
                <p className="text-[48px] font-medium leading-[43.2px] sm:text-[32px] ">
                  {t("only-work.stats.team.label")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OnlyWorkBanner;
