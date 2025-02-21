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

export const OUR_WORKS = [
  {
    title: "ALPHA CARGO",
    description:
      "Сайт и приложение для логистической компании с личным кабинетом пользователя ",
    quantity: "5000",
    stats: "Скачиваний",
    firstImageOption: {
      image: Iphone13Left,
      styles:
        "w-[304px] sm:w-[250px] xs:w-[270px] absolute right-[150px] sm:right-[100px] xs:right-[10px] bottom-[10px] xs:bottom-[70px]",
    },
    secondImageOption: {
      styles: "w-[250px] sm:w-[207px] absolute right-0 bottom-[10px]",
      image: Iphone13Right,
    },
  },
  {
    title: "PRESTIGE TOWER",
    description: "Сайт по продаже и аренде офисов",
    quantity: "117 000",
    stats: "Посетителей сайта",
    firstImageOption: {
      image: Iphone13LeftBlack,
      styles: "w-[314px] sm:w-[150px] absolute right-[120px] bottom-[10px]",
    },
    secondImageOption: {
      styles: "w-[215px] sm:w-[183px] absolute right-0 bottom-[-10px]",
      image: Iphone13RightBlack,
    },
  },
  {
    title: "ONLYWORK",
    description: "Программа по отслеживанию рабочего времени сотрудников",
    quantity: "117 000",
    stats: "Посетителей сайта",
    firstImageOption: {
      image: DashboardLaptop,
      styles: "w-[411px] sm:w-[297px] absolute right-[0] bottom-0",
    },
    secondImageOption: {
      image: SignInImage,
      styles: "w-[215px] sm:w-[287px] absolute right-[-20px] bottom-[100px]",
    },
  },
  {
    title: "BRAND FABRICA",
    description: "Оптовый маркетплейс для фабрики",
    quantity: "117 000",
    stats: "Посетителей сайта",
    firstImageOption: {
      image: FabricaLeft,
      styles: "w-[448px] sm:w-[242px] absolute right-[-0] bottom-[-30px]",
    },
    secondImageOption: {
      image: FabricaRight,
      styles: "w-[315px] sm:w-[157px] absolute right-0 top-[32%]",
    },
  },
  {
    title: "CARGO SYSTEM",
    description: "ERP - CRM  Система для работы в Карго",
    quantity: "400+",
    stats: "Пользователей работают ",
    firstImageOption: {
      image: DashboardGraphic,
      styles: "w-[508px] absolute right-[160px] bottom-[10px] z-[10]",
    },
    secondImageOption: {
      image: MenuImage,
      styles: "w-[400px] absolute right-0 bottom-[10px]",
    },
  },
];
