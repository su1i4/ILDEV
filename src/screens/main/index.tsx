import { Banner } from "../main/ui/banner";
import { Services } from "./ui/services";
import { AnimatedBackground } from "./ui/animated-background";

export default function HomePage() {
  return (
    <div className="w-full h-[100vh] overflow-y-auto">
      <Banner />
      <AnimatedBackground>
        <Services />
      </AnimatedBackground>
    </div>
  );
}
