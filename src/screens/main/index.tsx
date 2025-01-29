import { Banner } from "../main/ui/banner";
import React from "react";

const AnimatedBackground = React.lazy(() => import("./ui/animated-background"));
const Services = React.lazy(() => import("./ui/services"));

export default function HomePage() {
  return (
    <div className="w-full h-[100vh] overflow-y-auto">
      <Banner />

      {/* <AnimatedBackground> */}
        <Services />
      {/* </AnimatedBackground> */}
    </div>
  );
}
