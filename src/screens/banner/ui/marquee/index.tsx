import Marquee from "react-fast-marquee";
import { MARQUEE_TEXT } from "@/lib/data";

export const MarqueeUi = () => {
  return (
    <Marquee pauseOnHover={true} speed={100} className="w-full flex items-center justify-between">
        {MARQUEE_TEXT.map((item: string, index: number) => (
            <div key={index} className="flex gap-5 items-center mr-5">
                <p className="text-[24px] font-[600]">{item}</p>
                <div className="w-[8px] h-[8px] rounded-full  bg-lightOrange" />
            </div>
        ))}
    </Marquee>
  );
};
