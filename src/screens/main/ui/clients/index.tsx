import { CLIENTS } from "@/lib/data/client.data";
import { Title } from "@/shared/title";
import { useTranslations } from "next-intl";

const Clients = () => {
  const t = useTranslations();
  return (
    <div className="w-full bg-[#18191E] p-[40px] flex flex-col ga-[90px]">
      <Title text={t("home.clients")} classNames="text-center" />
      <div className="flex items-center justify-between">
        {CLIENTS.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
