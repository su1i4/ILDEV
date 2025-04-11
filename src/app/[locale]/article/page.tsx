"use client";

import Image from "next/image";
import ArticleImage from "@/assets/images/article.png";
import Container from "@/shared/container";
import InfoTitle from "@/screens/infotitle";
import { useState } from "react";
import { useTranslations } from "next-intl";

const Article = () => {
  const [isActive, setIsActive] = useState(false);
  const t = useTranslations("article");
  const b = useTranslations("blog");
  return (
    <div className="container mx-auto w-full h-[100vh] overflow-y-auto">
      <Container className="md:px-5">
        <div className="mt-[158px] flex lg:flex-col lg:gap-[20px] gap-[141px]  md:mt-[100px]">
          <h1 className="text-[#FFFFFF] text-[54px] font-bold md:text-[30px] text-nowrap">
            {t("title")}
          </h1>
          <p className="text-[24px] font-normal text-[#fff] md:text-[15px]">
            {t("desc")}
          </p>
        </div>
      </Container>

      <div className="my-[100px] lg:flex-col ">
        <InfoTitle
          onClick={() => setIsActive(!isActive)}
          texts={[
            b("info.all"),
            b("info.articles"),
            b("info.new"),
            b("info.events"),
          ]}
          search={true}
        />
      </div>
      <Container className="md:p-3">
        <div className="container mx-auto px-4 py-12 md:py-8  text-[#FFFFFF]">
          <h1 className="text-4xl font-bold mb-8 md:text-[20px] md:leading-[90%]">
            {t("text1")}
          </h1>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 text-lg">
              <p className="mb-4 text-[#FFFFFF] text-[24px] font-medium md:text-[15px] md:leading-[90%]">
                {t("text2")}
              </p>

              <section className="flex gap-[20px] lg:flex-col lg:items-center  justify-center">
                <Image
                  src={ArticleImage}
                  alt="Вадим Миткин"
                  width={500}
                  height={500}
                  className="rounded-lg w-[395px] h-[272px] md:object-contain"
                />
                <div>
                  <h2 className="text-2xl font-semibold mb-4 md:text-[15px] md:font-bold">
                    {t("text3")}
                  </h2>

                  <p className="font-[300] text-[18px] md:text-[15px]">
                    {t("text4")}
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
        <p className="text-[24px] font-[400] text-[#404146] md:text-[16px]">
          11.12.2024
        </p>
      </Container>
    </div>
  );
};

export default Article;
