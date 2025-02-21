import QuestionForm from "@/components/form";
import Container from "@/shared/container";
import React from "react";

const Vacancies = () => {
  return (
    <div className="w-full h-[100vh] overflow-y-auto flex flex-col gap-[100px]">
      <Container>
        <div className="mt-[100px]">
          <h1 className="text-[64px] font-[600] mb-[20px]">Вакансии</h1>
          <p className="text-[24px] font-[400px] leading-[22.6px] max-w-[776px]">
            ILDEV - команда профессионалов в области разработки, дизайна и
            машинного обучения. Каждый день миллионы людей в мире пользуются
            нашими сервисами и приложениями
          </p>
        </div>
      </Container>

      <section className="w-[90%] m-auto">
        <h3 className="text-[48px] font-[500] mb-[30px]">Выбери категорию</h3>
        <ul className="flex flex-col gap-[20px]">
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

export default Vacancies;
