import { Logo } from "@/assets/icons/Logo";
import { Routers } from "./ui/routers";
import { Button } from "@/shared/button";
import { Burger } from "@/assets/icons/Burger";

export const Header = () => {
  return (
    <div className="w-full mx-auto container flex justify-between items-center px-24 backdrop-blur-md py-2">
      <div className="flex items-center gap-1">
        <Logo width="36" height="36" />
        <div className="text-white mt-1">
          <p className="text-[28px] font-[700] leading-5 tracking-wide">
            ILDEV
          </p>
          <p className="text-[6px]">SOFTWARE DEVELOPMENT</p>
        </div>
      </div>
      <div className="flex items-center gap-[100px]">
        <Routers />
        <div className="flex items-center gap-[20px] z-10">
          <Button text="связаться с нами!" />
          <div className="min-w-[41px]">
            <Burger />
          </div>
        </div>
      </div>
    </div>
  );
};
