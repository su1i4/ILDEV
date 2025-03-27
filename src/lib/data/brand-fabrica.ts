import ResultImage1 from "@/assets/images/result-fabrica-1.png";
import ResultImage2 from "@/assets/images/result-fabrica-2.png";

import { AppScreenshot, ProjectData } from "@/common";

export const BRAND_FABRICA = (t: any): ProjectData => {
  return {
    task: {
      year: 2024,
      description: t("brandfabrica.data.task"),
    },
    result: {
      mainText: t("brandfabrica.data.result.mainText"),
      features: [
        t("brandfabrica.data.result.features.list1"),
        t("brandfabrica.data.result.features.list2"),
        t("brandfabrica.data.result.features.list3"),
        t("brandfabrica.data.result.features.list4"),
      ],
      mainText2: "",
    },
    technicalDetails: {
      title: "",
      features: [
        t("brandfabrica.data.technicalDetails.features.list1"),
        t("brandfabrica.data.technicalDetails.features.list2"),
        t("brandfabrica.data.technicalDetails.features.list3"),
        t("brandfabrica.data.technicalDetails.features.list4"),
        t("brandfabrica.data.technicalDetails.features.list5"),
      ],
      title2: "",
    },
  };
};

export const BRAND_FABRICA_SCREEN = (t: any): AppScreenshot[] => [
  {
    id: 1,
    title: t("brandfabrica.screen"),
    images: [
      {
        image: ResultImage1,
      },
    ],
  },
  {
    id: 2,
    title: "",
    images: [
      {
        image: ResultImage2,
      },
    ],
  },
];
