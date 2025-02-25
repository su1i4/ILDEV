"use client";

import { useEffect, useState } from "react";
import { OUR_WORKS } from "@/lib/data/card.data";
import InfoTitle from "@/screens/infotitle";
import Card from "@/screens/main/ui/card";
import { Screenshots } from "@/screens/screenshots";
import Technology from "@/screens/technology";
import netframework from "@/assets/images/netframework-1 1.png";
import JavaScript from "@/assets/images/javascript.png";
import C from "@/assets/images/C.png";
import Vue from "@/assets/images/vue.png";
import BrandFabricaBanner from "@/screens/main/ui/brand-fabrica";
import { BRAND_FABRICA, BRAND_FABRICA_SCREEN } from "@/lib/data/brand-fabrica";
import Container from "@/shared/container";

const BrandFabrica = () => {
  const [isActive, setIsActive] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div className="w-full h-[100vh] overflow-y-auto flex flex-col gap-[100px]">
      <BrandFabricaBanner />
      <InfoTitle
        texts={["Описание", "Процесс"]}
        onClick={() => setIsActive(!isActive)}
      />
      {isActive ? (
        <Container>
          <div className="flex gap-[40px]">
            <h2 className="text-[24px] font-medium mb-4">Процесс</h2>
            <section className="text-[24px] font-[400]">
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>
                  <span className="font-semibold">Frontend:</span> Vue.js для
                  создания удобного пользовательского интерфейса.
                </li>
                <li>
                  <span className="font-semibold">Backend:</span> .NET и C# для
                  масштабируемой серверной архитектуры.
                </li>
              </ul>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  <span className="font-semibold">
                    Анализ и проектирование.
                  </span>{" "}
                  Проведен аудит текущих бизнес-процессов компании Brand
                  Fabrica. Создан прототип интерфейса с модулями: каталог
                  продукции, система управления заказами, отчетность.
                </li>
                <li>
                  <span className="font-semibold">
                    Разработка backend-части.
                  </span>{" "}
                  На основе .NET и C# реализована централизованная система
                  обработки заказов. Встроен расчет стоимости с учетом опций
                  (количество, дизайн, материалы). Синхронизирован учет наличия
                  на складе с системой заказов.
                </li>
                <li>
                  <span className="font-semibold">
                    Разработка frontend-части.
                  </span>{" "}
                  Vue.js позволил создать интуитивно понятный интерфейс для
                  оптовых покупателей. Добавлены функции загрузки собственных
                  логотипов, выбор дизайнов и предварительного просмотра.
                </li>
                <li>
                  <span className="font-semibold">
                    Интеграция системы доставки.
                  </span>{" "}
                  Интеграция API транспортных компаний для расчета стоимости и
                  сроков доставки. Отслеживание статуса заказа в личном
                  кабинете.
                </li>
                <li>
                  <span className="font-semibold">
                    Тестирование и оптимизация.
                  </span>{" "}
                  Тестирование модулей позволило исключить ошибки при массовых
                  заказах. Оптимизировано время загрузки страниц и обработка
                  больших объемов данных.
                </li>
              </ol>
            </section>
          </div>
        </Container>
      ) : (
        <Screenshots
          screenshots={BRAND_FABRICA_SCREEN}
          projectData={BRAND_FABRICA}
        />
      )}

      <Technology
        title="Технологии"
        technologies={[netframework, JavaScript, C, Vue]}
      />
      <div className="flex flex-wrap lg:flex-col gap-6 max-w-[90%] m-auto my-[100px]">
        {OUR_WORKS.slice(2, 4).map((project, index) => (
          <Card
            key={project.title}
            {...project}
            array={OUR_WORKS}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default BrandFabrica;
