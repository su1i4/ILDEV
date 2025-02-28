import MobileDevelopment from "../../../public/MobileDevelopment.png";
import SoftwareDevelopment from "../../../public/SoftwareDevelopment.png";
import Cubersecurity from "../../../public/Cybersecurity.png";
import UIUX from "../../../public/UiUxDesign.png";
import AI from "../../../public/AI.png";

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
