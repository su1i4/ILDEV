import { OUR_WORKS } from "@/lib/data/card.data";
import { Banner } from "../main/ui/banner";
import React from "react";
import Card from "./ui/card";

// const AnimatedBackground = React.lazy(() => import("./ui/animated-background"));
const Services = React.lazy(() => import("./ui/services"));
const Clients = React.lazy(() => import("./ui/clients"))
const Footer = React.lazy(() => import("../../components/footer"))

export default function HomePage() {
  return (
    <div className="w-full h-[100vh] overflow-y-auto">
      <Banner />

      {/* <AnimatedBackground> */}
        <Services />
        <Clients />
      {/* </AnimatedBackground> */}
      <Footer />
    </div>
  );
}
