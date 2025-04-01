import { twMerge } from "tailwind-merge";

interface TitleProp {
  classNames: string;
  text: string;
}

export const Title = ({ text, classNames }: TitleProp) => {
  return (
    <h1
      className={twMerge(
        "text-[64px] md:text-[32px] font-[600] leading-[56px] text-white",
        classNames
      )}
    >
      {text}
    </h1>
  );
};
