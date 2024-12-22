import { Header } from "@/components/header";
import { MarqueeUi } from "./ui/marquee";
import { Middle } from "./ui/middle";
import { Animation } from "./ui/animation";

export const Banner = () => {
  return (
    <div className="w-full h-[100vh] relative">
       <div className="absolute top-0 bottom-0 w-full flex items-center justify-end">
        <Animation />
      </div>
      <div className="absolute top-8 w-full">
        <Header />
      </div>
      <div className="absolute top-0 bottom-0 w-full flex items-center">
        <Middle />
      </div>
      <div className="absolute bottom-0 w-full py-[20px] bg-lightDark">
        <MarqueeUi />
      </div>
    </div>
  );
};
