"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AlphaCargoImage1 from "@/assets/images/alpha-cargo-1.png";
import AlphaCargoImage2 from "@/assets/images/alpha-cargo-2.png";
import { useTranslations } from "next-intl";

const AlphaCargoBanner = () => {
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
		<div className="   flex flex-col justify-between gap-[50px] px-6 sm:px-3  xs:px-2 ">
			<div
				className="relative flex lg:flex-col pt-20 lg:pt-32 px-4  lg:px-8 mt-[100px] xs:mt-[10px] lg:gap-[88px]    ">
				<motion.div
					className="relative container mx-auto lg:max-w-7xl z-0"
					initial={fadeInUp.initial}
					animate={fadeInUp.animate}
					transition={fadeInUp.transition}>
					<div className="max-w-3xl">
						<h1 className="text-[64px] md:text-[32px] lg:text-5xl xs:text-[24px] font-bold text-white leading-tight xs:mb-0 mb-8">
							ALPHA CARGO
						</h1>
					</div>
				</motion.div>
				<motion.div
					className="relative z-0 w-full flex flex-col items-center"
					initial={fadeInRight.initial}
					animate={fadeInRight.animate}
					transition={fadeInRight.transition}>
					<div className="w-[501px] h-[501px] xs:h-[350px] xs:w-[350px] ms:w-[290px] ms:h-[290px] rounded-full bg-custom-gradient"></div>

					<motion.div
						className="w-[601px] md:w-[350px] lg:w-[601px] xs:w-[400px] xs:h-[200px]  ms:w-[330px] ms:h-[131px]   xs:top-[100px] ms:top-[90px]    h-auto absolute top-[138px] z-[2]"
						initial={imageAnimation.initial}
						animate={imageAnimation.animate}
						transition={imageAnimation.transition}>
						<Image
							src={AlphaCargoImage1}
							alt="Desktop view"
							className="rounded-lg object-cover  hover:scale-105 transition-transform duration-300"
						/>
					</motion.div>

					<motion.div
						className="w-[368px] md:w-[300px] lg:w-[368px] xs:w-[236px] xs:h-[130px] ms:w-[200px] ms:h-[130px] xs:top-[35px] xs:right-[-18px]   h-auto rotate-6 absolute top-[49px] right-[0px] z-[1]"
						initial={imageAnimation.initial}
						animate={imageAnimation.animate}
						transition={{ ...imageAnimation.transition, delay: 0.6 }}>
						<Image
							src={AlphaCargoImage2}
							alt="Mobile view"
							className="rounded-lg shadow-xl object-cover hover:scale-105 transition-transform duration-300"
						/>
					</motion.div>
				</motion.div>
			</div>

			<motion.div
				className="py-8 lg:py-16 px-4  xs:px-3 lg:px-8"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.8 }}>
				<div>
					<div className="flex lg:gap-32 gap-[20px] sm:flex-col xs:gap-[19px]  ">
						<h2 className="text-2xl lg:text-3xl md:text-2xl  font-bold text-white text-nowrap">
							{t("alpha-cargo.project.about.title")}
						</h2>
						<div className="flex flex-col leading-[22.6px] text-[24px]  xs:text-[15px] ms:text-[13px]">
							<p className="lg:text-xl md:text-[15px] text-gray-300 max-w-3xl">
								{t("alpha-cargo.project.about.description")}
							</p>
							<p className="md:text-[15px] ">
								{t("alpha-cargo.project.about.steps")}
							</p>
							<ul className="pl-8 list-disc mb-[15px]">
								<li>{t("alpha-cargo.project.about.stepsList.step1")}</li>
								<li>{t("alpha-cargo.project.about.stepsList.step2")}</li>
								<li>{t("alpha-cargo.project.about.stepsList.step3")}</li>
								<li>{t("alpha-cargo.project.about.stepsList.step4")}</li>
							</ul>
							<p>{t("alpha-cargo.project.about.results")}</p>
						</div>
					</div>

					<div className="flex flex-col gap-4 mt-[40px]">
						<h1 className="text-[32px] font-medium">
							{t("alpha-cargo.project.stats.title")}asdfsdaf
						</h1>
						<div className="flex gap-[20px]  text-white rounded-lg ">
							<div className=" max-w-[671px] w-full md:w-[100px] flex-1 border border-gray-700 p-[30px] xs:p-[15px] ">
								<p className="text-[64px] md:text-[48px]  xs:text-[30px] font-bold">
									{t("alpha-cargo.project.stats.users.number")}
								</p>
								<p className="text-[48px] md:text-[32px] sm:text-[15px] xs:text-[15px] ms:text-[13px] font-medium">
									{t("alpha-cargo.project.stats.users.label")}
								</p>
							</div>
							<div className=" max-w-[671px] w-full md:w-[100px] flex-1 border border-gray-700 p-[30px] xs:p-[15px]">
								<p className="text-[64px] md:text-[48px]  xs:text-[30px] font-bold">
									{t("alpha-cargo.project.stats.team.number")}
								</p>
								<p className="text-[48px] md:text-[32px] sm:text-[15px] xs:text-[15px] ms:text-[13px] font-medium leading-[43.2px]">
									{t("alpha-cargo.project.stats.team.label")}
								</p>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default AlphaCargoBanner;
