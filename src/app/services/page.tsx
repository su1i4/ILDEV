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

const Service = () => {
  return (
    <div className="w-full h-[100vh] overflow-y-auto flex flex-col gap-[100px]">
      <Container>
        <div className="mt-[120px] flex flex-col gap-[20px]">
          <h1 className="text-[64px] font-[600]">Наши услуги</h1>
          <p className="text-[24px] font-[400] leading-[22.6px] max-w-[776px]">
            С 2019 года аутстафим отдельных специалистов и готовые команды: бэк,
            фронт, мобилки, ML, QA на проекты бигтехов.Нас 120 человек, офисы в
            Екатеринбурге, Ереване и Лиссабоне
          </p>
        </div>
      </Container>
      <Image src={ServiceEmployes} alt="employes" />

      <Clients />

      <Container>
        <h1 className="text-[#FFFFFF] text-[48px] font-[500] mb-[10px]">
          Кейсы
        </h1>
        <div className="flex flex-wrap lg:flex-col gap-6 m-auto">
          {OUR_WORKS.splice(2, 3).map((project, index) => (
            <Card
              key={project.title}
              {...project}
              array={OUR_WORKS}
              index={index}
            />
          ))}
        </div>
      </Container>

      <TechStack />
      <div className="my-[100px] max-w-[80%] m-auto">
        <QuestionForm
          title="Готовы обсудить проект?"
          description="Заполните форму и мы свяжемся с вами в ближайшее время"
        />
      </div>
      <div className="flex justify-between bg-[#18191E]">
        <div className="py-[40px] pl-[40px] flex flex-col leading-[80px]">
          <h1 className="text-[48px] font-[500]">+7 777 777 77 77</h1>
          <h2 className="text-[48px] font-[500]">info@ildev.kg</h2>
          <SocialMedia />
        </div>

        <div className="flex gap-[33px]">
          <Logo width="321px" height="326px" />
          <p className="text-[24px] font-[400] leading-[22.6px] max-w-[486px] pt-[40px] ">
            Наш подход основан на дерзких идеях, прорывных технологиях и
            непрерывном стремлении к совершенству
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
