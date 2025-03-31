"use client";

import InfoTitle from "@/screens/infotitle";
import Ios from "@/assets/images/ios.png";
import Android from "@/assets/images/android.png";
import Card from "@/screens/main/ui/card";
import { OUR_WORKS } from "@/lib/data/card.data";
import PrestigeTowerBanner from "@/screens/main/ui/prestige/prestige-tower-banner";
import { useTranslations } from "next-intl";
import { useState } from "react";
import Technology from "@/screens/technology";
import { Section3 } from "@/screens/main/ui/prestige/prestigeSection3";
import { projectData, Screenshots } from "@/lib/data/prestige.tower";

const PrestigeTower = () => {
	const [isActive, setIsActive] = useState(false);

	const t = useTranslations();

	return (
		<div className="w-full h-[100vh]  mx-auto container overflow-y-auto  flex flex-col gap-[100px]">
			<PrestigeTowerBanner />
			<InfoTitle
				texts={[t("global.desc"), t("global.proccess")]}
				onClick={() => setIsActive(!isActive)}
			/>

			<Technology
				title={t("global.technology")}
				technologies={[Ios, Android]}
			/>
			<Section3 screenshots={Screenshots(t)} projectData={projectData(t)} />

			<div className="flex flex-wrap lg:flex-col gap-6 max-w-[90%] m-auto my-[100px]">
				{OUR_WORKS(t)
					.splice(0, 2)
					.map((project, index) => (
						<Card
							key={project.title}
							{...project}
							array={OUR_WORKS(t)}
							index={index}
						/>
					))}
			</div>
		</div>
	);
};

export default PrestigeTower;
