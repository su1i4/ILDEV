// import { OUR_WORKS } from "@/lib/data/card.data";
import QuestionForm from "@/components/form";
import { Banner } from "../main/ui/banner";
import React from "react";
import Card from "./ui/card";
import { OUR_WORKS } from "@/lib/data/card.data";
import { useTranslations } from "next-intl";

// const AnimatedBackground = React.lazy(() => import("./ui/animated-background"));
const Services = React.lazy(() => import("./ui/services"));
const Clients = React.lazy(() => import("./ui/clients"));
const Footer = React.lazy(() => import("../../components/footer"));

export default function HomePage() {
	const t = useTranslations();

	return (
		<div className="w-full h-[100vh]  overflow-y-auto">
				<Banner />

				<Services />

			<div className="container mx-auto">
				<h1 className="text-[64px] lg:text-[48px] sm:text-[32px] xs:text-[24px] font-[600] pl-[100px] xs:pl-0 mt-[20px] xs:text-center">
					{t("home.project")}
				</h1>

				<div className="flex  flex-wrap lg:flex-col gap-6 max-w-[90%] m-auto my-20 sm:my-12 xs:my-6">
					{OUR_WORKS(t)
						.splice(0, 4)
						.map((project, index) => (
							<Card
								key={project.title}
								{...project}
								array={OUR_WORKS(t)}
								index={index}
							/>
						))}
				</div>
				<Clients />
				<div className="my-20 sm:my-12 xs:my-6 max-w-[85%] lg:max-w-[90%] xs:max-w-[96%] m-auto">
					<QuestionForm
						title={t("home.form.title")}
						description={t("home.form.desc")}
					/>
				</div>
				<div className="my-20 sm:my-12 xs:my-6 max-w-[85%] lg:max-w-[90%] xs:max-w-[96%] m-auto">
					<Footer />
				</div>
			</div>
		</div>
	);
}
