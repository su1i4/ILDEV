"use client";

import { useRouter } from "@/navigation";
import { Logo } from "@/assets/icons/Logo";
import { Routers } from "./ui/routers";
import { Button } from "@/shared/button";
import { Burger } from "@/assets/icons/Burger";
import LocaleSwitcher from "../locales/LocaleSwitcher";
import { useTranslations } from "next-intl";

export const Header = () => {
  const router = useRouter();
  const t = useTranslations();
  return (
    <div className="w-full mx-auto container flex justify-between items-center sm:gap-[5px] px-24 sm:px-6 backdrop-blur-md py-2">
      <div
        className="flex items-center gap-1 cursor-pointer"
        onClick={() => router.push("/")}
      >
        <Logo width="36" height="36" />
        <div className="text-white mt-1">
          <p className="text-[28px] font-[700] leading-5 tracking-wide">
            ILDEV
          </p>
          <p className="text-[6px]">SOFTWARE DEVELOPMENT</p>
        </div>
      </div>
      <div className="flex items-center gap-[100px]">
        <nav className="sm:hidden">
          <Routers />
        </nav>

        <div className="flex items-center gap-[20px] sm:gap-[10px] z-10">
          <LocaleSwitcher />
          <Button
            text={t("layout.nav.action")}
            classNames="text-nowrap font-[300] text-[15px] px-3"
          />
          <article className="hidden sm:block">
            <Burger />
          </article>
        </div>
      </div>
    </div>
  );
};
