// import { OUR_WORKS } from "@/lib/data/card.data";
import QuestionForm from "@/components/form";
import { Banner } from "../main/ui/banner";
import React from "react";

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
