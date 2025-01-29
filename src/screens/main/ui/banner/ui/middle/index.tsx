import clsx from "clsx";
import { Link } from "@/assets/icons/Link";
import { Button } from "@/shared/button";

export const Middle = () => {
  return (
    <div className="container mx-auto px-24">
      <h1 className="mb-[20px]">
        {"ILDEV — МЫ СОЗДАЕМ\nРЕВОЛЮЦИОННЫЕ\nЦИФРОВЫЕ РЕШЕНИЯ".split("")
          .map((char, index) => {
            if (char === "\n") {
              return <br key={`break-${index}`} />;
            }
            return (
              <span
                key={index}
                className={clsx(
                  "animated-char text-[64px] font-[600] leading-[60px]",
                  { "mr-6": char === " " }
                )}
                style={{ animationDelay: `${index * 0.03}s` }}
              >
                {char}
              </span>
            )
          })}
      </h1>
      <Button text="Оставить заявку" icon={<Link />} />
    </div>
  );
};
