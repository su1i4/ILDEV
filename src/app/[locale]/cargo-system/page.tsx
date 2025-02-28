"use client";

import React, { useEffect, useState } from "react";
import Technology from "@/screens/technology";

import netframework from "@/assets/images/netframework-1 1.png";
import JavaScript from "@/assets/images/javascript.png";
import C from "@/assets/images/C.png";
import Vue from "@/assets/images/vue.png";
import CargoSystemBanner from "@/screens/main/ui/cargo-system/cargo-system-banner";
import InfoTitle from "@/screens/infotitle";
import { Screenshots } from "@/screens/screenshots";
import { OUR_WORKS } from "@/lib/data/card.data";
import Card from "@/screens/main/ui/card";
import { CARGO_SYSTEM, CARGO_SYSTEM_SCREEN } from "@/lib/data/cargo-system";
import { useTranslations } from "next-intl";

const CargoSystem = () => {
  const [isActive, setIsActive] = useState(false);
  const [mounted, setMounted] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full h-[100vh] overflow-y-auto flex flex-col gap-[100px]">
      <CargoSystemBanner />
      <InfoTitle
        texts={["Описание", "Процесс"]}
        onClick={() => setIsActive(!isActive)}
      />
      {isActive ? (
        <div className="bg-black text-white p-6 rounded-2xl shadow-lg w-full max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-4">Процесс</h2>
          <p className="mb-4">Для реализации использовались:</p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>
              <span className="font-semibold">Frontend:</span> Vue.js для
              создания интерактивного интерфейса.
            </li>
            <li>
              <span className="font-semibold">Backend:</span> .NET и C# для
              обработки данных и управления логистикой.
            </li>
            <li>
              <span className="font-semibold">Анализ и проектирование.</span>{" "}
              Определены ключевые функции системы: отслеживание грузов,
              онлайн-оплата, расчет тарифов. Разработаны прототипы личного
              кабинета и интерфейса для сотрудников.
            </li>
            <li>
              <span className="font-semibold">Разработка backend-части.</span>{" "}
              .NET и C# использованы для построения устойчивого backend-а.
              Внедрена REST API-структура для интеграции с внутренними
              системами. Добавлены модули расчетов стоимости и страхования
              грузов.
            </li>
            <li>
              <span className="font-semibold">Разработка frontend-части.</span>{" "}
              Vue.js обеспечил динамический и удобный интерфейс. Реализована
              функция генерации накладных и запросов на выезд курьера.
            </li>
            <li>
              <span className="font-semibold">Интеграция.</span>{" "}
              Синхронизирована информация с системой склада и GPS-отслеживанием.
              Добавлен расчет сроков доставки в реальном времени.
            </li>
            <li>
              <span className="font-semibold">
                Тестирование и масштабирование.
              </span>{" "}
              Проведено тестирование на всех этапах логистического процесса.
              Оптимизировано время загрузки при большом объеме операций.
            </li>
          </ul>
        </div>
      ) : (
        <Screenshots
          screenshots={CARGO_SYSTEM_SCREEN}
          projectData={CARGO_SYSTEM}
        />
      )}

      <Technology
        title="Технологии"
        technologies={[netframework, JavaScript, C, Vue]}
      />
      <div className="flex flex-wrap lg:flex-col gap-6 max-w-[90%] m-auto my-[100px]">
        {OUR_WORKS(t)
          .splice(2, 3)
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

export default CargoSystem;
