// import { Download } from "@/assets/icons/Download";
import { Email } from "@/assets/icons/Email";
import { Logo } from "@/assets/icons/Logo";
import { ROUTES } from "@/lib/data";
import { Link } from "@/navigation";
import { SocialMedia } from "@/shared/socials";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations();
  return (
    <footer className="w-full bg-[#18191E] flex items-end justify-between px-24 py-8 rounded-[30px] md:flex-col md:items-start lg:px-12 sm:px-8 xs:px-4 md:gap-5">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-1 mx-auto m-2 container">
          <Logo width="80" height="80" />
          <div className="text-white mt-1">
            <p className="text-[58px] font-[700] leading-9 tracking-wide">
              ILDEV
            </p>
            <p className="text-[12px]">SOFTWARE DEVELOPMENT</p>
          </div>
        </div>
        <SocialMedia />
        <div className="flex bg items-center gap-[20px] sm:flex-wrap">
          {ROUTES(t).map((item, i) => (
            <Link key={item.link} href={item.link} className="group z-10">
              <p className="text-[18px] font-[400] relative">
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-500 group-hover:w-full"></span>
                <span className="ml-4">{i < ROUTES.length - 1 && "|"}</span>
              </p>
            </Link>
          ))}
        </div>
        <p className="text-white">{t("layout.nav.text")}</p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-[5px]">
          <Email />
          <p>ildev@info.kg</p>
        </div>
        <div className="flex items-center gap-[5px]">
          {/* <Download /> */}
          <p>{t("layout.nav.download")}</p>
        </div>
        <p>{t("layout.nav.politic")}</p>
      </div>
    </footer>
  );
};

export default Footer;
