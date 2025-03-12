import { CLIENTS } from "@/lib/data/client.data";
import { Title } from "@/shared/title";
import { useTranslations } from "next-intl";

const Clients = () => {
  const t = useTranslations();
  return (
    <div className="w-full bg-[#18191E] flex flex-col">
      <Title text={t("home.clients")} classNames="text-center mt-12 sm:mt-8 xs:mt-4" />
      <div className="grid grid-cols-4 items-center sm:grid-cols-2 px-8 sm:px-4 xs:px-2 justify-between my-12 sm:my-8 xs:my-4">
        {CLIENTS.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
