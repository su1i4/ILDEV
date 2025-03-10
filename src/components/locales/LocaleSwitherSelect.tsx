"use client";

import { usePathname, useRouter } from "@/navigation";
import clsx from "clsx";
import { useLocale } from "next-intl";
import { ReactNode, useTransition } from "react";

type Props = {
  children?: ReactNode;
};

export default function LocaleSwitcherSelect({ children }: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const currentLocale = useLocale();

  function switchLocale(nextLocale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => switchLocale("ru")}
        className={clsx(
          "cursor-pointer hover:opacity-80",
          currentLocale !== "ru" ? "text-white" : "text-[#FF4B55]"
        )}
      >
        RU
      </button>
      <span>/</span>
      <button
        onClick={() => switchLocale("en")}
        className={clsx(
          "cursor-pointer hover:opacity-80",
          currentLocale !== "en" ? "text-white" : "text-[#FF4B55]"
        )}
      >
        EN
      </button>
    </div>
  );
}
