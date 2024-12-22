import { Hand } from "@/assets/icons/services/mobile/hand";
import { CoinTopLeft } from "@/assets/icons/services/mobile/coinTopLeft";
import { CoinBottomLeft } from "@/assets/icons/services/mobile/coinBottomleft";
import { CoinMiddleLeft } from "@/assets/icons/services/mobile/coinMiddleLeft";

export const links = {
  home: "/",
  projects: "/projects",
  contacts: "/contacts",
  vacancies: "/vacancies",
  blog: "/blog",
};

export const MARQUEE_TEXT = [
  "ВЕБ-РАЗРАБОТКА",
  "DIGITAL MARKETING",
  "UX/UI ДИЗАЙН",
  "КОНТЕНТ",
  "ВЕБ-ДИЗАЙН",
  "ВЕБ-РАЗРАБОТКА",
  "DIGITAL MARKETING",
  "UX/UI ДИЗАЙН",
  "КОНТЕНТ",
  "ВЕБ-ДИЗАЙН",
];

export const ROUTES = [
  {
    link: links.projects,
    name: "проекты",
  },
  {
    link: links.blog,
    name: "блог",
  },
  {
    link: links.contacts,
    name: "контакты",
  },
  {
    link: links.vacancies,
    name: "вакансии",
  },
];

export const SERVICES = [
  {
    name: "Разработка мобильных приложений",
    icons: [
      {
        component: <Hand />,
        classNames: "absolute bottom-0 left-[calc(50%-75px)] z-10 ",
      },
      {
        component: <CoinTopLeft />,
        classNames: "absolute left-[25%] top-[5%]",
      },
      {
        component: <CoinMiddleLeft />,
        classNames: "absolute top-[30%] left-[33%]",
      },
      {
        component: <CoinBottomLeft />,
        classNames: "absolute bottom-[25%] left-[16%]",
      },
    ],
  },
  //   {
  //     name: "Разработка программных обеспечений и сайтов",
  //   },
  //   {
  //     name: "Кибербезопасность",
  //   },
  //   {
  //     name: "Разработка мобильных приложений",
  //   },
];
