import Application1 from "@/assets/images/application-1.png";
import Application2 from "@/assets/images/application-2.png";
import Application3 from "@/assets/images/application-3.png";
import Application4 from "@/assets/images/application-4.png";
import WebsiteImage from "@/assets/images/website.png";
import { AppScreenshot, ProjectData } from "@/common";

export const projectData = (t: any): ProjectData => {
  return {
    task: {
      year: 2024,
      description: t("alpha-cargo.projectData.task"),
    },
    result: {
      mainText: t("alpha-cargo.projectData.result.mainText"),
      features: [
        t("alpha-cargo.projectData.result.features.list1"),
        t("alpha-cargo.projectData.result.features.list2"),
        t("alpha-cargo.projectData.result.features.list3"),
        t("alpha-cargo.projectData.result.features.list4"),
        t("alpha-cargo.projectData.result.features.list5"),
        t("alpha-cargo.projectData.result.features.list6"),
      ],
      mainText2: t("alpha-cargo.projectData.result.mainText2"),
    },
    technicalDetails: {
      title: t("alpha-cargo.projectData.technicalDetails.title"),
      features: [
        t("alpha-cargo.projectData.technicalDetails.features.list1"),
        t("alpha-cargo.projectData.technicalDetails.features.list2"),
        t("alpha-cargo.projectData.technicalDetails.features.list3"),
        t("alpha-cargo.projectData.technicalDetails.features.list4"),
      ],
      title2: t("alpha-cargo.projectData.technicalDetails.title2"),
    },
  };
};

export const appScreenshots = (t: any): AppScreenshot[] => [
  {
    id: 1,
    title: t("alpha-cargo.appScreenshots.application"),
    images: [
      {
        image: Application1,
        className: "h-[634px]",
      },
      {
        image: Application2,
        className: "h-[634px]",
      },
      {
        image: Application3,
        className: "h-[634px]",
      },
      {
        image: Application4,
        className: "h-[634px]",
      },
    ],
  },
  {
    id: 2,
    title: t("alpha-cargo.appScreenshots.punkt"),
    images: [
      {
        image: WebsiteImage,
        className: "h-[784px] sm:h-[fit-content] object-contain",
      },
    ],
  },
];
