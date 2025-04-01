"use client";

import Image from "next/image";
import ArticleImage from "@/assets/images/article.png";
import Container from "@/shared/container";
import InfoTitle from "@/screens/infotitle";
import { useState } from "react";

const Article = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="w-full h-[100vh] overflow-y-auto">
      <Container className="md:px-5">
        <div className="mt-[158px] flex md:flex-col gap-[141px] md:gap-[20px] md:mt-[100px]">
          <h1 className="text-[#FFFFFF] text-[54px] font-bold md:text-[30px] text-nowrap">
            БЛОГ/ПРИНЦИПЫ
          </h1>
          <p className="text-[24px] font-normal text-[#fff] md:text-[15px]">
            Мы знаем, что тебе крайне интересно узнать, чем живет IT-компания. И
            ты по адресу!
          </p>
        </div>
      </Container>

      <div className="my-[100px] md:my-[50px]">
        <InfoTitle
          onClick={() => setIsActive(!isActive)}
          texts={["Все", "Статьи", "Новости", "События"]}
          search={true}
        />
      </div>
      <Container className="md:p-3">
        <div className="container mx-auto px-4 py-12 md:py-8  text-[#FFFFFF]">
          <h1 className="text-4xl font-bold mb-8 md:text-[20px] md:leading-[90%]">
            Как принципы кинематографа помогают создавать продукты для бизнеса
          </h1>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 text-lg">
              <p className="mb-4 text-[#FFFFFF] text-[24px] font-medium md:text-[15px] md:leading-[90%]">
                Героем нового выпуска ЧГПП стал Вадим Миткин – методолог,
                предприниматель с более чем 25-летним опытом создания цифровых
                продуктов, продюсерaid команд (Медтех, Продуктовая технология,
                Технологии разработки). CEO Drive Tech. У него есть свой
                продюсерский центр, где он с командой создает продукты (и зачем
                вообще его собирать), сколько можно заработать на проектном
                гонораре и почему IT-продукты в серьезных науках доходят до
                продукта.
              </p>

              <section className="flex gap-[20px] flex-wrap justify-center">
                <Image
                  src={ArticleImage}
                  alt="Вадим Миткин"
                  width={500}
                  height={500}
                  className="rounded-lg w-[395px] h-[272px] md:object-contain"
                />
                <div>
                  <h2 className="text-2xl font-semibold mb-4 md:text-[15px] md:font-bold">
                    Как ты вообще пришел к тому, чем занимаешься?
                  </h2>

                  <p className="font-[300] text-[18px] md:text-[15px]">
                    Я порядка 20 лет занимался бизнесом. У меня была компания,
                    которая занимала заметный продуктовый и технологический
                    кусок рынка в разных областях как софтверной разработки, так
                    и консалтинга. И в какой-то момент я понял, что как в
                    кинематографе продюсер движет историю, так и в бизнесе
                    продюсер движет проект. Причем делает это целиком и
                    полностью через людей. Те, кто пытается делать проекты в
                    ручном режиме без внятной методологии, как правило,
                    проигрывают. Те, кто выстраивает систему, могут
                    масштабировать свой бизнес.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
        <p className="text-[24px] font-[400] text-[#404146] md:text-[16px]">11.12.2024</p>
      </Container>
    </div>
  );
};

export default Article;
