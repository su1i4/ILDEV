import clsx from "clsx";
import { Link } from "@/assets/icons/Link";
import { Button } from "@/shared/button";
import { useTranslations } from "next-intl";

export const Middle = () => {
  const t = useTranslations();

  return (
    <div className="container mx-auto px-24 lg:px-12 sm:px-6 xs:px-2">
      <h1 className="mb-5 text-[64px] font-[600] leading-[64px] lg:leading-[48px] lg:text-[48px] md:text-[26px] md:leading-[26px] xs:text-[24px] xs:leading-[24px]">
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
      <Button classNames="xs:text-[14px] xs:py-1" text={t("home.action")} icon={<Link />} />
    </div>
  );
};
