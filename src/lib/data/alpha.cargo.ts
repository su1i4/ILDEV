import Dashboard from "@/assets/images/dashboard-graphic.png";
import DashboardLaptop from "@/assets/images/dashboard-laptop.png";
import { StaticImageData } from "next/image";

interface ProjectData {
  task: {
    year: number;
    description: string;
  };
  result: {
    mainText: string;
    features: string[];
  };
  technicalDetails: {
    title: string;
    features: string[];
  };
}

interface AppScreenshot {
  id: number;
  title: string;
  images: string | StaticImageData[];
}

export const projectData: ProjectData = {
  task: {
    year: 2024,
    description:
      "В 2024 году компания Альфа Карго обратилась к нам с задачей разработки современного сайта и мобильного приложения, которые бы упростили клиентам взаимодействие с сервисом грузоперевозок...",
  },
  result: {
    mainText:
      "Мы разработали сайт и мобильное приложение с широким функционалом, которые обеспечивают:",
    features: [
      "Личный кабинет клиента, где можно:",
      "Отслеживать статус отправлений в реальном времени. Управлять накладными и смотреть историю отправлений.",
      "Производить быструю онлайн-оплату услуг. Вызывать выездную группу для забора груза.",
      "Интеграция с CRM-системой компании для автоматизации внутренних процессов управления",
      "Полную адаптивность сайта и приложения для удобной работы на любых устройствах",
      "Возможность получения уведомлений о статусе отправлений и акциях компании",
    ],
  },
  technicalDetails: {
    title: "Технологические особенности",
    features: [
      "Разработан удобный интерфейс с акцентом на скорость и простоту взаимодействия",
      "Внедрена система аналитики, позволяющая отслеживать поведение пользователей для дальнейшего улучшения сервиса",
      "Интеграция с платежными системами для безопасных и удобных транзакций",
      "Возможность работы оффлайн: клиенты могут сохранять информацию и работать с ней без подключения к интернету",
    ],
  },
};

export const appScreenshots: AppScreenshot[] = [
  {
    id: 1,
    title: "Приложение",
    images: [
      Dashboard,
      DashboardLaptop,
      Dashboard,
      Dashboard,
      Dashboard,
      Dashboard,
      Dashboard,
      Dashboard,
      DashboardLaptop,
      Dashboard,
      Dashboard,
      Dashboard,
      Dashboard,
      Dashboard,
      DashboardLaptop,
      Dashboard,
      Dashboard,
      Dashboard,
      Dashboard,
      Dashboard,
      Dashboard,
      DashboardLaptop,
      Dashboard,
      Dashboard,
      Dashboard,
      Dashboard,
      Dashboard,
    ],
  },
  {
    id: 2,
    title: "Пункты Альфа",
    images: [Dashboard	],
  },
];
