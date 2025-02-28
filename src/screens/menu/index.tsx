import { IRoutes } from "@/common";
import { ROUTES } from "@/lib/data";
import { Link } from "@/navigation";
import { SocialMedia } from "@/shared/socials";
import { Title } from "@/shared/title";
import { useTranslations } from "next-intl";

const Menu = () => {
  const t = useTranslations();
  return (
    <div className="w-full h-[100vh] flex items-center">
      <div className="px-24 grid grid-cols-2 gap-10">
        {ROUTES(t).map((item: IRoutes) => (
          <Link key={item.link} href={item.link}>
            <Title text={item.name} classNames="font-[600] text-[50px]" />
          </Link>
        ))}
      </div>
      <div className="w-full fixed bottom-12 px-24">
        <SocialMedia />
      </div>
    </div>
  );
};

export default Menu;
