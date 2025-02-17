import Image from "next/image";
type ImageOption = {
  image: string;
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
}

const Card = ({
  title,
  description,
  firstImageOption,
  secondImageOption,
  quantity,
  stats,
  array,
  index,
}: CardProps) => {
  const isLastOdd =
    !!array && index === array.length - 1 && array.length % 2 !== 0;

  return (
    <div
      className={`bg-black w-[48%] lg:w-[100%] text-white h-[502px] p-6 rounded-2xl shadow-lg flex flex-col justify-between gap-4 relative overflow-hidden ${
        isLastOdd ? "xl:col-span-2" : ""
      }`}
    >
      <div className="flex flex-col gap-4">
        <h2 className="text-[48px] md:text-[20px] font-[500] text-[#FFFFFF] ">
          {title}
        </h2>
        <p className="text-[24px] md:text-[15px] font-[400] text-[#FFFFFF] ">
          {description}
        </p>
      </div>
      <Image
        src={firstImageOption?.image}
        alt={title}
        width={400}
        height={200}
        className={firstImageOption?.styles}
      />
      <Image
        src={secondImageOption?.image}
        alt={title}
        width={400}
        height={200}
        className={secondImageOption?.styles}
      />
      <div className="flex flex-col gap-4">
        <span className="text-gray-300 font-semibold">{quantity}</span>
        <span className="text-gray-300 font-semibold">{stats}</span>
      </div>
    </div>
  );
};

export default Card;
