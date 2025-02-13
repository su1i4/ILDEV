import { OUR_WORKS } from "@/lib/data/card.data";
import { Banner } from "../main/ui/banner";
import React from "react";
import Card from "./ui/card";

// const AnimatedBackground = React.lazy(() => import("./ui/animated-background"));
const Services = React.lazy(() => import("./ui/services"));

export default function HomePage() {
  return (
    <div className="w-full h-[100vh] overflow-y-auto">
      <Banner />

      {/* <AnimatedBackground> */}
      <Services />
      <div className="flex flex-wrap lg:flex-col gap-6 max-w-[90%] m-auto">
        {OUR_WORKS.map((project, index) => (
          <Card
            key={project.title}
            {...project}
            array={OUR_WORKS}
            index={index}
          />
        ))}
      </div>
      {/* </AnimatedBackground> */}
    </div>
  );
}
