import clsx from "clsx";
import { Link } from "@/assets/icons/Link";
import { Button } from "@/shared/button";
import { useTranslations } from "next-intl";

export const Middle = () => {
  const t = useTranslations();

  return (
    <div className="container mx-auto px-6 md:px-24">
      <h1 className="mb-5 text-[40px] md:text-[64px] font-[600] leading-[44px] md:leading-[60px]">
        {t("home.title")
          .split("\n")
          .map((line, lineIndex) => (
            <span key={`line-${lineIndex}`} className="block">
              {line.split("").map((char, charIndex) => (
                <span
                  key={`char-${lineIndex}-${charIndex}`}
                  className={clsx("animated-char", { "mr-2": char === " " })}
                  style={{
                    animationDelay: `${(lineIndex * 10 + charIndex) * 0.03}s`,
                  }}
                >
                  {char}
                </span>
              ))}
            </span>
          ))}
      </h1>
      <Button text={t("home.action")} icon={<Link />} />
    </div>
  );
};
