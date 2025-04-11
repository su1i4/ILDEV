import Container from "@/shared/container";
import ServiceEmployes from "@/assets/images/services-employes.png";
import React from "react";
import Image from "next/image";
import Clients from "@/screens/main/ui/clients";
import { OUR_WORKS } from "@/lib/data/card.data";
import Card from "@/screens/main/ui/card";
import TechStack from "@/screens/techstack";
import QuestionForm from "@/components/form";
import { SocialMedia } from "@/shared/socials";
import { Logo } from "@/assets/icons/Logo";
import { useTranslations } from "next-intl";
import ArticleImage from "@/assets/images/article.png";


const Service = () => {
  const b = useTranslations("blog");
  const articles = [
    {
      title: `${b("title")}`,
      date: "11.12.2024",
      image: ArticleImage,
    },
    {
      title: `${b("title")}`,
      date: "11.12.2024",
      image: ArticleImage,
    },
    {
      title: `${b("title")}`,
      date: "11.12.2024",
      image: ArticleImage,
    },
  ];
  const t = useTranslations("ServicesText");

  return (
    <div className="w-full mx-auto container h-[100vh] overflow-y-auto flex flex-col gap-[100px] md:gap-[60px]">
      <Container>
        <div className="mt-[120px] md:mt-[80px] flex flex-col gap-[20px]">
          <h1 className="text-[64px] font-[600] md:text-[32px]">{t("text1")}</h1>
          <p className="text-[24px] font-[400] leading-[22.6px] max-w-[776px] md:text-[15px]">
          {t("text2")}
          </p>
        </div>
      </Container>
      <div className="w-[90%] m-auto">
        <Image src={ServiceEmployes} alt="employes" />
      </div>

      <Clients />

      <Container className="md:p-0">
        <h1 className="text-[#FFFFFF] text-[48px] font-[500] mb-[10px] lg:hidden">
        {t("text3")}
        </h1>
        <div className="flex flex-wrap lg:flex-col gap-6 m-auto">
          {OUR_WORKS(t)
            .slice(0, 5)
            .map((project, index) => (
              <Card
                key={project.title}
                {...project}
                array={OUR_WORKS(t)}
                index={index}
              />
            ))}
        </div>
      </Container>

      <TechStack />
      <div className="my-[100px] max-w-[90%] m-auto md:my-0">
        <QuestionForm
          title={t("text7")}
          description={t("text8")}
        />
      </div>
      <div className="px-4 w-[90%] container m-auto">
        <h2 className="text-[48px] md:text-3xl font-medium mb-6">
        {t("text5")}
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-1 gap-6">
          {articles.map((article, index) => (
            <div key={index} className="bg-[#131313] p-4 rounded-xl">
              <h3 className="text-xl font-bold mb-2 md:text-[24px]">{b("article")}</h3>
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <Image
                  src={article.image}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p className="text-[24px] leading-[90%] font-[400] mb-2 text-[#FFFFFF] md:text-[15px]">
                {article.title}
              </p>
              <p className="text-[#404146] text-[24px] font-[400] md:text-[15px]">
                {article.date}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between bg-[#18191E] md:flex-col">
        <div className="py-[40px] pl-[40px] flex flex-col leading-[80px] md:leading-[40px] md:py-[20px]">
          <h1 className="text-[48px] font-[500] md:text-[24px]">
            +7 777 777 77 77
          </h1>
          <h2 className="text-[48px] font-[500] md:text-[24px]">
            info@ildev.kg
          </h2>
          <SocialMedia />
        </div>

        <div className="flex gap-[33px] md:flex-col md:gap-1">
          <div className="md:hidden">
            <Logo width="321px" height="326px" />
          </div>
          <p className="text-[24px] font-[400] leading-[22.6px] max-w-[486px] pt-[40px] md:pt-[10px] md:max-w-fit md:text-[15px] md:px-4">
          {t("text6")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
