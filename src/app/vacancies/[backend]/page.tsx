import QuestionForm from "@/components/form";
import Container from "@/shared/container";
import React from "react";

const BackendVacancies = () => {
  return (
    <div className="w-full h-[100vh] overflow-y-auto flex flex-col gap-[100px]">
      <Container>
        <div className="mt-[100px] mr-[179px]">
          <h1 className="text-[64px] font-[600] mb-[20px]">
            Backend go developer
          </h1>
          <p className="text-[24px] font-[400px] leading-[22.6px]">
            Сейчас мы расширяем штат и ищем опытного Backend-разработчика (Go)
            (Middle|Senior) для работы над крупным проектом. Тебе предстоит
            участие в разработке многопользовательского текстового редактора,
            создание продуктовых фичей и решение сложных технических задач.
          </p>
        </div>
      </Container>
      <Container>
        <div className="mb-8 flex">
          <h2 className="text-[32px] font-medium mb-4 w-[189px]">Условия</h2>
          <ul className="space-y-2 leading-[22.6px]">
            <li className="flex items-start">
              <span className="text-[24px] font-[400] mr-2">•</span>
              <span>
                Возможность трудоустройства в аккредитованной ИТ-компании
                Бишкека;
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[24px] font-[400] mr-2">•</span>
              <span>
                Гибкий график, офис в центре Бишкека, либо возможность удаленной
                работы на территории Кыргызстана;
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[24px] font-[400] mr-2">•</span>
              <span>
                Участие в профильных конференциях и курсы повышения квалификации
                за наш счёт;
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[24px] font-[400] mr-2">•</span>
              <span>Корпоративные встречи;</span>
            </li>
            <li className="flex items-start">
              <span className="text-[24px] font-[400] mr-2">•</span>
              <span>
                Performance Review с пересмотром заработной платы два раза в
                год;
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[24px] font-[400] mr-2">•</span>
              <span>
                Драйвовый и дружный коллектив, который всегда готов поделиться
                огромным опытом, и команда, всегда готовая прийти на помощь;
              </span>
            </li>
          </ul>
        </div>

        <div className="flex gap-[20px]">
          <h2 className="text-[32px] font-medium mb-4">Ожидания</h2>
          <ul className="space-y-2 leading-[22.6px]">
            <li className="flex items-start">
              <span className="text-[24px] font-[400] mr-2">•</span>
              <span>
                Не менее 3-х лет коммерческого опыта в backend-разработке на Go
                (Golang);
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[24px] font-[400] mr-2">•</span>
              <span>Опыт работы с высоконагруженными системами;</span>
            </li>
            <li className="flex items-start">
              <span className="text-[24px] font-[400] mr-2">•</span>
              <span>Уверенное владение Python;</span>
            </li>
            <li className="flex items-start">
              <span className="text-[24px] font-[400] mr-2">•</span>
              <span>
                Понимание и знание классических алгоритмов и структур данных;
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[24px] font-[400] mr-2">•</span>
              <span>Опыт работы с PostgreSQL;</span>
            </li>
            <li className="flex items-start">
              <span className="text-[24px] font-[400] mr-2">•</span>
              <span>Опыт использования gRPC;</span>
            </li>
            <li className="flex items-start">
              <span className="text-[24px] font-[400] mr-2">•</span>
              <span>
                Опыт работы с Docker (опыт с Kubernetes будет преимуществом);
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[24px] font-[400] mr-2">•</span>
              <span>Опыт работы с GraphQL;</span>
            </li>
          </ul>
        </div>
      </Container>

      <section className="w-[90%] m-auto ">
        <h3 className="text-[48px] font-[500] mb-[30px]">Выбери категорию</h3>
        <ul className="flex flex-col gap-[20px] mb-[100px]">
          {[
            "Backend go developer",
            "IOS developer",
            "Android developer",
            "Backend developer python",
            "QA engineer",
            "Бухгалтер",
          ].map((item: string) => (
            <li
              key={item}
              className="bg-[#18191E] p-[30px] rounded-[30px] font-[500] text-[32px]"
            >
              {item}
            </li>
          ))}
        </ul>
        <QuestionForm
          title="Нашел вакансию? Пиши"
          description="Заполните форму и мы свяжемся с вами в ближайшее время"
          textarea
        />
      </section>
    </div>
  );
};

export default BackendVacancies;
