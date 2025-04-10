import CargoLogin from "@/assets/images/login.png";
import CargoOrder from "@/assets/images/image 33.png";
import CargoMaps from "@/assets/images/cargo-maps.png";
import CargoDashboard from "@/assets/images/cargo-dashboard.png";

import { AppScreenshot, ProjectData } from "@/common";

export const CARGO_SYSTEM = (t: any): ProjectData => {
  return {
    task: {
      year: 2024,
      description: t("cargosystem.tasks"),
    },
    result: {
      mainText: t("only-work.result.mainText"),
      features: [
        t("cargosystem.firstblock.list1"),
        t("cargosystem.firstblock.list2"),
        t("cargosystem.firstblock.list3"),
        t("cargosystem.firstblock.list4"),
      ],
      mainText2: "",
    },
    technicalDetails: {
      title: "",
      features: [
        t("cargosystem.secondblock.list1"),
        t("cargosystem.secondblock.list2"),
        t("cargosystem.secondblock.list3"),
        t("cargosystem.secondblock.list4"),
        t("cargosystem.secondblock.list5"),
      ],
      title2: "",
    },
  };
};

export const CARGO_SYSTEM_SCREEN = (t: any): AppScreenshot[] => [
  {
    id: 1,
    title: t("cargosystem.crm"),
    images: [
      {
        image: CargoLogin,
        className: "w-[47%]",
      },
      {
        image: CargoOrder,
        className: "w-[47%]",
      },
    ],
  },
  {
    id: 2,
    title: "",
    images: [
      {
        image: CargoMaps,
        className: "w-[47%]",
      },
      {
        image: CargoDashboard,
        className: "w-[47%]",
      },
    ],
  },
];
