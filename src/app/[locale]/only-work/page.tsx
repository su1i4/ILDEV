"use client";

import InfoTitle from "@/screens/infotitle";
import { Screenshots } from "@/screens/screenshots";
import Technology from "@/screens/technology";
import netframework from "@/assets/images/netframework-1 1.png";
import JavaScript from "@/assets/images/javascript.png";
import C from "@/assets/images/C.png";
import Vue from "@/assets/images/vue.png";
import Card from "@/screens/main/ui/card";
import { OUR_WORKS } from "@/lib/data/card.data";
import OnlyWorkBanner from "@/screens/main/ui/only-work/only-work-banner";
import { ONLY_WORK_DATA, ONLY_WORK_SCREEN } from "@/lib/data/only-work";
import { useEffect, useState } from "react";
import Container from "@/shared/container";
import { useTranslations } from "next-intl";

const OnlyWork = () => {
  const [isActive, setIsActive] = useState(false);
  const [mounted, setMounted] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className="w-full h-[100vh] overflow-y-auto">
      <OnlyWorkBanner />
      <InfoTitle
        texts={["Описание", "Процесс"]}
        onClick={() => setIsActive(!isActive)}
      />
      {isActive ? (
        <Container>
          <div className="flex gap-[40px]">
            <h2 className="text-[24px] font-medium mb-4">Процесс</h2>
            <div className="text-[24px] font-[400]">
              <p className="mb-4">
                Процесс разработки. Для реализации проекта мы использовали
                следующие технологии:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>
                  <span className="font-semibold">Frontend:</span> Vue.js — для
                  создания быстрого и интуитивно понятного интерфейса.
                </li>
                <li>
                  <span className="font-semibold">Backend:</span> .NET и C# —
                  для построения масштабируемого и производительного серверного
                  приложения.
                </li>
                <li>
                  <span className="font-semibold">
                    Анализ и проектирование.
                  </span>{" "}
                  Проведен глубокий анализ потребностей пользователей. Созданы
                  прототипы модулей: тайм-трекинг, дашборды, система отчетности
                  и аналитики.
                </li>
                <li>
                  <span className="font-semibold">
                    Разработка backend-части.
                  </span>{" "}
                  .NET и C# позволили реализовать производительный сервер с
                  гибкой архитектурой. Система построена с использованием REST
                  API, что обеспечило стабильную интеграцию между сервером и
                  клиентской частью. Встроены функции геолокации и проверки
                  данных в реальном времени.
                </li>
                <li>
                  <span className="font-semibold">
                    Разработка frontend-части.
                  </span>{" "}
                  Vue.js обеспечил простоту разработки и адаптивность
                  интерфейса. Весь пользовательский интерфейс был разработан с
                  упором на удобство и скорость доступа к ключевым функциям.
                  Создано несколько кастомных компонентов для визуализации
                  данных: графики, интерактивные таблицы и фильтры.
                </li>
                <li>
                  <span className="font-semibold">Интеграция модулей.</span>{" "}
                  Модуль тайм-трекинга синхронизирован с отчетами и аналитикой,
                  чтобы данные отображались в реальном времени. Добавлены
                  push-уведомления для напоминаний о начале/окончании рабочего
                  дня.
                </li>
                <li>
                  <span className="font-semibold">
                    Тестирование и оптимизация.
                  </span>{" "}
                  Проведено многоуровневое тестирование backend и frontend
                  частей. Оптимизирована работа приложения для обеспечения
                  стабильности при увеличении количества пользователей.
                </li>
              </ul>
            </div>
          </div>
        </Container>
      ) : (
        <Screenshots
          screenshots={ONLY_WORK_SCREEN}
          projectData={ONLY_WORK_DATA}
        />
      )}
      <Technology
        title="Технологии"
        technologies={[netframework, JavaScript, C, Vue]}
      />
      <div className="flex flex-wrap lg:flex-col gap-6 max-w-[90%] m-auto my-[100px]">
        {OUR_WORKS(t)
          .splice(0, 2)
          .map((project, index) => (
            <Card
              key={project.title}
              {...project}
              array={OUR_WORKS(t)}
              index={index}
            />
          ))}
      </div>
    </div>
  );
};

export default OnlyWork;
