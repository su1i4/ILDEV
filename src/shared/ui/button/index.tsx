import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import { ReactNode } from "react";

interface ButtonProps {
  text: string;
  classNames?: string;
  icon?: any;
  type?: "primary" | "secondary";
}

export const Button = ({
  text,
  classNames,
  icon,
  type = "primary",
}: ButtonProps) => {
  return (
    <div
      className={twMerge(
        clsx(
          "px-6 py-3 rounded-full text-lg font-medium relative overflow-hidden cursor-pointer transition-all duration-300 animate-pulse hover:shadow-lg hover:shadow-[#BA2025] hover:translate-x-1 hover:translate-y-[-4px] ",
          {
            "flex items-center gap-2 w-fit": icon,
            "primary-button text-white": type === "primary",
            "secondary-button text-black": type === "secondary",
          },
          classNames
        )
      )}
    >
      <span className="relative z-10">{text}</span>
      {icon && <span className="relative z-10">{icon}</span>}
    </div>
  );
};
