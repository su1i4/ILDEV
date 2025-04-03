import Application1 from "@/assets/images/prestigePhoto1.png";
import Application2 from "@/assets/images/prestigePhoto2.png";
import Application3 from "@/assets/images/prestigePhoto3.png";
import Application4 from "@/assets/images/prestigePhoto4.png";
import { AppScreenshot, ProjectData } from "@/common";

export const projectData = (t: any): ProjectData => {
  return {
    task: {
      year: 2024,
      description: t("prestige-towers.projectData.task"),
    },
    result: {
      mainText: t("prestige-towers.projectData.result.mainText"),
      features: [
        t("prestige-towers.projectData.result.features.list1"),
        t("prestige-towers.projectData.result.features.list2"),
        t("prestige-towers.projectData.result.features.list3"),
      ],
      mainText2: t("alpha-cargo.projectData.result.mainText2"),
    },
    technicalDetails: {
      title: t("alpha-cargo.projectData.technicalDetails.title"),
      features: [
        t("prestige-towers.projectData.technicalDetails.features.list1"),
        t("prestige-towers.projectData.technicalDetails.features.list2"),
        t("prestige-towers.projectData.technicalDetails.features.list3"),
        t("prestige-towers.projectData.technicalDetails.features.list4"),
      ],
      title2: t("prestige-towers.projectData.technicalDetails.title2"),
    },
  };
};

export const PRESTIGE_TOWER_SCREEN = (t: any): AppScreenshot[] => [
  {
    id: 1,
    title: t("alpha-cargo.appScreenshots.application"),
    images: [
      {
        image: Application1,
        className: "w-[295px] md:w-[190px] sm:h-[284px] md:mb-2 xs:w-[130px]",
      },
      {
        image: Application2,
        className: "w-[295px] md:w-[190px] sm:h-[284px] xs:w-[130px]",
      },
      {
        image: Application3,
        className: "w-[295px] md:w-[190px] sm:h-[284px] xs:w-[130px]",
      },
      {
        image: Application4,
        className: "w-[295px] md:w-[190px] sm:h-[284px] xs:w-[130px]",
      },
    ],
  },
];