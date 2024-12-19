import { Header } from "@/components/header";
import { MarqueeUi } from "./ui/marquee";
import { Middle } from "./ui/middle";

export const Banner = () => {
  return (
    <div className="w-full h-[100vh] relative overflow-hidden">
      <div className="absolute top-8 w-full transition duration-300">
        <Header />
      </div>
      <div className="absolute top-0 bottom-0 w-full flex items-center transition duration-300">
        <Middle />
      </div>
      <div className="absolute bottom-0 w-full py-[20px] bg-lightDark transition duration-300">
        <MarqueeUi />
      </div>
    </div>
  );
};
