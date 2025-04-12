import { IRoutes } from "@/common";
import { ROUTES } from "@/lib/data";
import { Link } from "@/navigation";
import { SocialMedia } from "@/shared/socials";
import { Title } from "@/shared/title";
import { useTranslations } from "next-intl";

const Menu = () => {
  const t = useTranslations();
  return (
    <div className="w-full mx-auto container h-[100vh] flex items-center">
      <div className="px-24 grid grid-cols-2 lg:grid-cols-1 gap-10 sm:px-12 xs:px-6">
        {ROUTES(t).map((item: IRoutes) => (
          <Link key={item.link} href={item.link}>
            <Title text={item.name} classNames="font-[600] text-[64px] xs:text-[48px]" />
          </Link>
        ))}
      </div>
      <div className="w-full fixed bottom-12 px-24 lg:flex lg:justify-center">
        <SocialMedia />
      </div>
    </div>
  );
};

export default Menu;
