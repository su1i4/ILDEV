import Iphone13Left from "@/assets/images/iphone-13-pro-left.png";
import Iphone13Right from "@/assets/images/iphone-13-pro-right.png";

import Iphone13LeftBlack from "@/assets/images/iphone-13-black-left.png";
import Iphone13RightBlack from "@/assets/images/iphone-13-black-right.png";

import SignInImage from "@/assets/images/signin-image.png";
import DashboardLaptop from "@/assets/images/dashboard-laptop.png";

import FabricaLeft from "@/assets/images/fabrica-left.png";
import FabricaRight from "@/assets/images/fabrica-right.png";

import DashboardGraphic from "@/assets/images/dashboard-graphic.png";
import MenuImage from "@/assets/images/menu-image.png";

export const OUR_WORKS = (t?: any) => {
  return [
    {
      title: t("home.projects.alphacargo.title"),
      description: t("home.projects.alphacargo.desc"),
      quantity: t("home.projects.alphacargo.sum"),
      stats: t("home.projects.alphacargo.sumdesc"),
      firstImageOption: {
        image: Iphone13Left,
        styles:
          "w-[304px] sm:w-[250px] xs:w-[200px] ms:w-[180px] absolute right-[150px] sm:right-[100px] xs:right-[100px] ms:right-[75px] bottom-[0px] transition-all duration-300 hover:scale-105 hover:translate-x-[-30px]",
      },
      secondImageOption: {
        styles:
          "w-[250px] sm:w-[207px] xs:w-[180px] ms:w-[150px] absolute right-0 bottom-[0px] hover:scale-105 transition-all duration-300",
        image: Iphone13Right,
      },
      url: "/alpha-cargo",
    },
    {
      title: t("home.projects.prestigetower.title"),
      description: t("home.projects.prestigetower.desc"),
      quantity: t("home.projects.prestigetower.sum"),
      stats: t("home.projects.prestigetower.sumdesc"),
      firstImageOption: {
        image: Iphone13LeftBlack,
        styles:
          "w-[314px] sm:w-[170px] absolute right-[120px] bottom-[0px] xs:bottom-[45px] hover:scale-105 transition-all duration-300",
      },
      secondImageOption: {
        styles:
          "w-[215px] sm:w-[153px] absolute right-0 bottom-[-10px] hover:scale-105 transition-all duration-300 hover:translate-x-[-20px]",
        image: Iphone13RightBlack,
      },
      url: "/prestige-tower",
    },
    {
      title: t("home.projects.onlywork.title"),
      description: t("home.projects.onlywork.desc"),
      quantity: t("home.projects.onlywork.sum"),
      stats: t("home.projects.onlywork.sumdesc"),
      firstImageOption: {
        image: DashboardLaptop,
        styles:
          "w-[400px] sm:w-[267px] absolute right-[0] bottom-[40px] sm:bottom-[120px] rotate-[10deg] sm:rotate-[5deg] hover:scale-105 transition-all duration-300",
      },
      secondImageOption: {
        image: SignInImage,
        styles:
          "w-[315px] sm:w-[247px] absolute right-[-30px] bottom-[100px] sm:right-[-70px] sm:bottom-[55px] rotate-[-15deg] hover:scale-105 transition-all duration-300",
      },
      url: "/only-work",
    },
    {
      title: t("home.projects.brandfabrica.title"),
      description: t("home.projects.brandfabrica.desc"),
      quantity: t("home.projects.brandfabrica.sum"),
      stats: t("home.projects.brandfabrica.sumdesc"),
      firstImageOption: {
        image: FabricaLeft,
        styles:
          "w-[410px] sm:w-[322px] absolute right-[-0] bottom-[-30px] sm:bottom-[120px] hover:scale-105 transition-all duration-300",
      },
      secondImageOption: {
        image: FabricaRight,
        styles:
          "w-[315px] sm:w-[237px] absolute right-0 top-[32%] sm:top-[59%] hover:scale-105 transition-all duration-300",
      },
      url: "/brand-fabrica",
    },
    {
      title: t("home.projects.systemcargo.title"),
      description: t("home.projects.systemcargo.desc"),
      quantity: t("home.projects.systemcargo.sum"),
      stats: t("home.projects.systemcargo.sumdesc"),
      firstImageOption: {
        image: DashboardGraphic,
        styles:
          "w-[508px] absolute right-[160px] md:w-[300px] bottom-[10px] h-[] z-[10] lg:right-[0px]  sm:bottom-[90px] sm:right-0",
      },
      secondImageOption: {
        image: MenuImage,
        styles:
          "w-[400px] sm:w-[237px] absolute right-0 bottom-[10px] lg:hidden ",
      },
      url: "/cargo-system",
    },
  ];
};
