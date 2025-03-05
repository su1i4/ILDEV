"use client";

import { usePathname, useRouter } from "@/navigation";
import clsx from "clsx";
import { ChangeEvent, ReactNode, useTransition } from "react";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
	const nextLocale = event.target.value;
	startTransition(() => {
	  router.replace(
		pathname,
		{ locale: nextLocale }
	  );
	});
  }
  
  return (
    <label
      htmlFor="locale-switcher"
      className={clsx(
        "relative text-gray-400",
        isPending && "opacity-50 transition-opacity"
      )}
    >
      {label}
      <select
        id="locale-switcher"
        className="inline-flex appearance-none bg-transparent py-3 pl-2 pr-6"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
      <span>^</span>
    </label>
  );
}
