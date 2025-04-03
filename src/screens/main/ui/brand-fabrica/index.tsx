"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import BrandAndFabrica2 from "@/assets/images/brand-fabrica-1.png";
import BrandAndFabrica1 from "@/assets/images/brand-fabrica-2.png";
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
		<div className="bg-zinc-900 flex flex-col justify-between gap-[150px] xs:gap-[20px] px-6">
			<div className="relative flex ml:flex-col pt-20 lg:pt-32 px-4 lg:px-8 mt-[100px] lg:mt-[70px] ms:pt-10">
				<motion.div
					className="container mx-auto lg:max-w-7xl z-10"
					initial={fadeInUp.initial}
					animate={fadeInUp.animate}
					transition={fadeInUp.transition}>
					<div className="max-w-3xl">
						<h1 className="text-5xl font-bold text-white leading-tight mb-8 sm:text-4xl ms:text-[30px] ms:text-[26px] ">
							BRAND FABRICA
						</h1>
					</div>
				</motion.div>

				<motion.div
					className="relative w-full mt-12 "
					initial={fadeInRight.initial}
					animate={fadeInRight.animate}
					transition={fadeInRight.transition}>
					<div className="relative flex justify-center h-[400px]   md:right-[80px] ">
						<div className="w-[501px] h-[501px] rounded-full ml:right-[38%]  bg-custom-gradient absolute  lg:top-[20px] lg:left-[20%] sm:w-[450px] sm:h-[450px]  xs:w-[350px] xs:h-[350px]  ms:w-[290px] ms:h-[290px] "></div>

						<motion.div
							className="z-[2] mt-[100px] w-full  max-w-[610px] absolute top-[50px]   lg:w-[648px]     md:left-[80px] sm:max-w-[550px]  xs:w-[400px] xs:left-[40px] ms:w-[345px]  ms:top-[5px] ms:right-1"
							initial={imageAnimation.initial}
							animate={imageAnimation.animate}
							transition={imageAnimation.transition}>
							<Image
								src={BrandAndFabrica1}
								alt="Desktop view"
								className="rounded-lg object-cover   w-full marker:  -rotate-[2deg] shadow-lg hover:scale-105 transition-transform duration-300"
							/>
						</motion.div>
						<motion.div
							className=" z-[55] left-[120px] max-w-[365px] w-full absolute top-[90px] lg:left-[250px]  md:-left-[50px] sm:w-[320px] xs:w-[280px]  xs:left-[90px]  ms:top-[50px]  ms:w-[200px] ms:left-[100px] "
							initial={imageAnimation.initial}
							animate={imageAnimation.animate}
							transition={{ ...imageAnimation.transition, delay: 0.6 }}>
							<Image
								src={BrandAndFabrica2}
								alt="Mobile view"
								className="rounded-lg w-full    shadow-xl object-cover hover:scale-105 transition-transform  duration-300"
							/>
						</motion.div>
					</div>
				</motion.div>
			</div>

			<motion.div
				className="py-8   px-4 lg:px-8 sm:py-[100px] lg:mt-[50px]  sm:pb-[0] ms:py-3"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.8 }}>
				<div>
					<div className="flex ml:gap-8 gap-[182px] sm:flex-col ">
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
						<div className="flex gap-[20px] text-white rounded-lg xs:flex-col ">
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
