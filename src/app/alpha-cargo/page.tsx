"use client";

import { useEffect, useState } from "react";
import InfoTitle from "@/screens/infotitle";
import { Screenshots } from "@/screens/screenshots";
import Technology from "@/screens/technology";
import netframework from "@/assets/images/netframework-1 1.png";
import JavaScript from "@/assets/images/javascript.png";
import C from "@/assets/images/C.png";
import Vue from "@/assets/images/vue.png";
import Card from "@/screens/main/ui/card";
import { OUR_WORKS } from "@/lib/data/card.data";
import AlphaCargoBanner from "@/screens/main/ui/alpha-cargo/alpha-cargo-banner";
import { appScreenshots, projectData } from "@/lib/data/alpha.cargo";
import Container from "@/shared/container";

const AlphaCargoPage = () => {
  const [isActive, setIsActive] = useState(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div>Загрузка...</div>;
  return (
    <div className="w-full h-[100vh] overflow-y-auto flex flex-col gap-[100px]">
      <AlphaCargoBanner />
      <InfoTitle
        texts={["Описание", "Процесс"]}
        onClick={() => setIsActive(!isActive)}
      />
      {isActive ? (
        <Container>
          <div className="flex gap-[40px]">
            <h2 className="text-[24px] font-medium mb-4">Процесс</h2>
            <div className="text-[24px] font-[400] leading-[23.6px]">
              <p className="mb-4">
                При создании сайта и мобильного приложения для Альфа Карго мы
                сделали ставку на современные технологии, которые обеспечивают
                высокую производительность, удобство поддержки и гибкость
                масштабирования.
              </p>
              <p className="mb-4">
                Для фронтенда мы выбрали{" "}
                <span className="font-semibold">React</span> и{" "}
                <span className="font-semibold">TypeScript</span>. Этот стек
                позволил нам создать интуитивно понятный интерфейс, который
                легко адаптируется под разные устройства, будь то мобильные
                телефоны или компьютеры.
              </p>
              <p className="mb-4">
                На бэкенде мы использовали{" "}
                <span className="font-semibold">Node.js</span> и{" "}
                <span className="font-semibold">NestJS</span>. Это сочетание
                обеспечило:
              </p>
              <ul className="list-disc list-inside mb-4">
                <li>Высокую скорость работы благодаря архитектуре Node.js.</li>
                <li>
                  Четкую структуру кода и возможность легкого масштабирования с
                  помощью NestJS.
                </li>
              </ul>
              <h3 className="text-lg font-semibold mb-2">
                Основные вызовы и их решения:
              </h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  <span className="font-semibold">
                    Разработка API для сложных процессов.
                  </span>{" "}
                  Мы реализовали RESTful API с четким разделением
                  ответственности.
                </li>
                <li>
                  <span className="font-semibold">Безопасность данных.</span>{" "}
                  Использовали передовые подходы, включая токенизацию,
                  шифрование и безопасные связи.
                </li>
                <li>
                  <span className="font-semibold">
                    Работа с геолокацией и картами.
                  </span>{" "}
                  Мы реализовали карты с возможностью отслеживания грузов в
                  реальном времени.
                </li>
                <li>
                  <span className="font-semibold">
                    Обработка большого объема данных.
                  </span>{" "}
                  Использовали микросервисную архитектуру NestJS для
                  распределения нагрузки.
                </li>
                <li>
                  <span className="font-semibold">
                    Совместимость и поддержка разных версий.
                  </span>{" "}
                  Мы провели многократное тестирование для обеспечения
                  стабильной работы.
                </li>
              </ol>
              <p className="mt-4">
                Мы детально изучили потребности Альфа Карго, а также запросы их
                клиентов, чтобы предложить оптимальные решения, соответствующие
                высоким стандартам отрасли.
              </p>
            </div>
          </div>
        </Container>
      ) : (
        <Screenshots screenshots={appScreenshots} projectData={projectData} />
      )}
      <Technology
        title="Технологии"
        technologies={[netframework, JavaScript, C, Vue]}
      />
      <div className="flex flex-wrap lg:flex-col gap-6 max-w-[90%] m-auto my-[100px]">
        {OUR_WORKS.slice(0, 2).map((project, index) => (
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

export default AlphaCargoPage;
