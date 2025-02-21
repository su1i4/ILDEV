import CargoLogin from "@/assets/images/login.png";
import CargoOrder from "@/assets/images/cargo-system-2.png";
import CargoMaps from "@/assets/images/cargo-maps.png";
import CargoDashboard from "@/assets/images/cargo-dashboard.png";

import { AppScreenshot, ProjectData } from "@/common";

export const CARGO_SYSTEM: ProjectData = {
  task: {
    year: 2024,
    description: `Компания ILDEV разработала Cargo System для автоматизации логистических процессов Альфа Карго, одного из крупнейших игроков на рынке грузоперевозок из Кыргызстана в Россию. Основной целью было создание платформы для управления отправками, отслеживания посылок и удобного взаимодействия с клиентами.`,
  },
  result: {
    mainText: "Ключевые задачи:",
    features: [
      "Создать личный кабинет для клиентов, где можно управлять отправлениями.",
      "Разработать модуль отслеживания статусов грузов.",
      "Внедрить систему онлайн-оплаты.",
      "Интегрировать API для работы с транспортными компаниями и страховыми партнерами.",
    ],
    mainText2: "",
  },
  technicalDetails: {
    title: "",
    features: [
      "Повышение качества обслуживания. Клиенты получили доступ к удобному личному кабинету с функцией полного контроля за отправками.",
      "Ускорение обработки заказов. Время обработки заявок сократилось на 40%.",
      "Увеличение прозрачности. Возможность отслеживания статусов грузов в реальном времени повысила доверие клиентов.",
      "Стабильность и масштабируемость. Платформа успешно обслуживает как частных клиентов, так и корпоративных партнеров.",
      "Снижение издержек. Автоматизация позволила сократить затраты на операционные процессы на 20%.",
    ],
    title2: "",
  },
};

export const CARGO_SYSTEM_SCREEN: AppScreenshot[] = [
  {
    id: 1,
    title: "CRM - система",
    images: [
      {
        image: CargoLogin,
        className: "h-[242px]",
      },
      {
        image: CargoOrder,
        className: "h-[242px]",
      },
    ],
  },
  {
    id: 2,
    title: "",
    images: [
      {
        image: CargoMaps,
        className: "h-[242px]",
      },
      {
        image: CargoDashboard,
        className: "h-[242px]",
      },
    ],
  },
];
