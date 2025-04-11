"use client";

import InfoTitle from "@/screens/infotitle";
import { useState } from "react";
import Container from "@/shared/container";
import { useTranslations } from "next-intl";
import Image from "next/image";
import BlogImage from "@/assets/images/blog.png";

export default function Blog() {
  const t = useTranslations();
  const [isActive, setIsActive] = useState(false);

  const articles = [
    {
      id: 1,
      title: t("blog.title"),
      date: "11.12.2024",
      image: BlogImage,
    },
    {
      id: 2,
      title: t("blog.title"),
      date: "11.12.2024",
      image: BlogImage,
    },
    {
      id: 3,
      title: t("blog.title"),
      date: "11.12.2024",
      image: BlogImage,
    },
    {
      id: 4,
      title: t("blog.title"),
      date: "11.12.2024",
      image: BlogImage,
    },
    {
      id: 5,
      title: t("blog.title"),
      date: "11.12.2024",
      image: BlogImage,
    },
    {
      id: 6,
      title: t("blog.title"),
      date: "11.12.2024",
      image: BlogImage,
    },
  ];

  return (
    <div className="mx-auto container w-full h-[100vh] overflow-y-auto">
      <Container className="md:px-5 mb-[40px]">
        <div className="mt-[158px] flex justify-between md:flex-col gap-[141px] md:gap-[20px] md:mt-[100px]">
          <h1 className="text-[#FFFFFF] text-[54px] font-bold md:text-[30px] text-nowrap">
            {t("blog.blogtext")}
          </h1>
          <p className="text-[24px] w-[548px] font-normal text-[#fff] md:w-full md:text-start  md:text-[14px] text-end">
            {t("blog.desc")}
          </p>
        </div>
      </Container>
      <Container>
        <InfoTitle
          texts={[
            t("blog.info.all"),
            t("blog.info.articles"),
            t("blog.info.new"),
            t("blog.info.events"),
          ]}
          onClick={() => setIsActive(!isActive)}
          search
        />
      </Container>

      <div className="px-16 py-8">
        <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:flex sm:flex-col  gap-[20px]">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-[#18191E] p-[40px] rounded-[30px]"
            >
              <div>
                <div>
                  <span className="text-[48px] font-medium md:text-[32px]">
                    {t("blog.article")}
                  </span>
                </div>
                <Image
                  src={article.image}
                  alt={article.title}
                  objectFit="cover"
                />
              </div>
              <div className="pt-4">
                <h2 className="text-[24px] font-[400] mb-2 leading-[90%] md:text-[18px] md:font-[300]">
                  {article.title}
                </h2>
                <p className="text-[24px] font-[400] text-[#404146]">
                  {article.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
