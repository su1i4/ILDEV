import Dashboard from "@/assets/images/dashboard-laptop.png";
import SignInImage from "@/assets/images/signin-image.png";

import { ProjectData } from "@/common";

import { StaticImageData } from "next/image";

interface AppScreenshot {
  id: number;
  title: string;
  images: { className?: string; image: string | StaticImageData }[];
}

export const ONLY_WORK_DATA = (t: any): ProjectData => {
  return {
    task: {
      year: 2024,
      description: t("only-work.projectDetails.description"),
    },
    result: {
      mainText: t("only-work.result.mainText"),
      features: [
        t("only-work.result.features.list1"),
        t("only-work.result.features.list2"),
        t("only-work.result.features.list3"),
        t("only-work.result.features.list4"),
      ],
      mainText2: "",
    },
    technicalDetails: {
      title: "",
      features: [
        t("only-work.technicalDetails.features.list1"),
        t("only-work.technicalDetails.features.list2"),
        t("only-work.technicalDetails.features.list3"),
        t("only-work.technicalDetails.features.list4"),
        t("only-work.technicalDetails.features.list5"),
      ],
      title2: "",
    },
  };
};

export const ONLY_WORK_SCREEN = (t: any): AppScreenshot[] => [
  {
    id: 1,
    title: t("only-work.web"),
    images: [
      {
        image: Dashboard,
        className: "h-[457px] w-[47%] sm:h-[fit-content]",
      },
      {
        image: SignInImage,
        className: "h-[437px] w-[47%] sm:h-auto",
      },
    ],
  },
];
