import { ROUTES } from "@/lib/data";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

export const Routers = () => {
  const t = useTranslations();

  return (
    <div className="flex bg items-center gap-[20px]">
      {ROUTES(t).map((item) => (
        <Link key={item.link} href={item.link} className="group z-10">
          <p className="text-[18px] font-[400] relative">
            {item.name}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
          </p>
        </Link>
      ))}
    </div>
  );
};
