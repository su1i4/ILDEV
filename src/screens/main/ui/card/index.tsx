"use client";

import { useRouter } from "@/navigation";
import Image from "next/image";
import { StaticImageData } from "next/image";

type ImageOption = {
  image: string | StaticImageData;
  styles?: string;
};

interface CardProps {
  title: string;
  description: string;
  quantity: string;
  stats: string;
  firstImageOption: ImageOption;
  secondImageOption: ImageOption;
  array?: CardProps[];
  index?: number;
  url: string;
}

const Card = ({
  title,
  description,
  firstImageOption,
  secondImageOption,
  quantity,
  stats,
  url,
  array,
  index,
}: CardProps) => {
  const isLastOdd =
    !!array && index === array.length - 1 && array.length % 2 !== 0;
  const router = useRouter();

  return (
    <div
      className={`bg-[#000000] w-[48%] lg:w-[100%] text-white h-[502px] sm:h-[442px] xs:h-[400px] p-6 xs:px-3 xs:py-2 rounded-2xl shadow-lg flex flex-col justify-between gap-4 relative overflow-hidden ${
        isLastOdd ? "w-[100%]" : ""
      }`}
      onClick={() => router.push(url)}
    >
      <div className="flex flex-col gap-4 xs:gap-1">
        <h2 className="text-[48px] md:text-[20px] font-[500] text-[#FFFFFF]">
          {title}
        </h2>
        <p className="text-[24px] md:text-[15px] font-[400] text-[#FFFFFF]">
          {description}
        </p>
      </div>
      <Image
        src={firstImageOption.image}
        alt={title}
        width={400}
        height={200}
        className={firstImageOption.styles}
      />
      <Image
        src={secondImageOption.image}
        alt={title}
        width={400}
        height={200}
        className={secondImageOption.styles}
      />
      <div className="flex flex-col gap-2">
        <span className="text-gray-300 text-[24px] xs:text-[16px] font-semibold">{quantity}</span>
        <span className="text-gray-300 text-[20px] xs:text-[16px] font-semibold">{stats}</span>
      </div>
    </div>
  );
};

export default Card;
