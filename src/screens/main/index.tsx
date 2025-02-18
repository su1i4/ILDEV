// import { OUR_WORKS } from "@/lib/data/card.data";
import QuestionForm from "@/components/form";
import { Banner } from "../main/ui/banner";
import React from "react";
import Card from "./ui/card";
import { OUR_WORKS } from "@/lib/data/card.data";

// const AnimatedBackground = React.lazy(() => import("./ui/animated-background"));
const Services = React.lazy(() => import("./ui/services"));
const Clients = React.lazy(() => import("./ui/clients"));
const Footer = React.lazy(() => import("../../components/footer"));

export default function HomePage() {
  return (
    <div className="w-full h-[100vh] overflow-y-auto">
      <Banner />

      {/* <AnimatedBackground> */}
      <Services />
      <Clients />

      <h1>Проекты</h1>

      <div className="flex flex-wrap lg:flex-col gap-6 max-w-[90%] m-auto my-[100px]">
        {OUR_WORKS.splice(0, 4).map((project, index) => (
          <Card
            key={project.title}
            {...project}
            array={OUR_WORKS}
            index={index}
          />
        ))}
      </div>
      {/* </AnimatedBackground> */}
      <div className="my-[100px] max-w-[80%] m-auto">
        <QuestionForm
          title="Готовы обсудить проект?"
          description="Заполните форму и мы свяжемся с вами в ближайшее время"
        />
      </div>
      <Footer />
    </div>
  );
}
