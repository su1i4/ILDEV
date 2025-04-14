import MobileDevelopment from "../../../public/Group 2.svg";
import SoftwareDevelopment from "../../../public/разработка.svg";
import Cubersecurity from "../../../public/Cyber_Attack.svg";
import UIUX from "../../../public/дизайн.svg";
import AI from "../../../public/ai_illustration.svg";

export const SERVICES = (t: any) => {
  return [
    {
      name: t("home.service.list1"),
      image: MobileDevelopment,
    },
    {
      name: t("home.service.list2"),
      image: SoftwareDevelopment,
    },
    {
      name: t("home.service.list3"),
      image: Cubersecurity,
    },
    {
      name: t("home.service.list4"),
      image: UIUX,
    },
    {
      name: t("home.service.list4"),
      image: AI,
    },
  ];
};
