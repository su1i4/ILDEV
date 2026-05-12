import { CLIENTS } from "@/lib/data/client.data";
import { Title } from "@/shared/title";
import { useTranslations } from "next-intl";

const Clients = () => {
  const t = useTranslations();

  return (
    <div className="w-full bg-[#18191E] flex flex-col">
      <Title
        text={t("home.clients")}
        classNames="text-center mt-12 sm:mt-8 xs:mt-4"
      />
      <div className="grid grid-cols-4 items-center sm:grid-cols-2 px-8 sm:px-4 xs:px-2 justify-between my-12 sm:my-8 xs:my-4">
        {CLIENTS.map((client, i) => (
          <a
            key={i}
            href={client.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Перейти на сайт ${client.name}`}
            className="
              group flex items-center justify-center p-6 rounded-2xl
              transition-all duration-300 ease-out
              opacity-70 grayscale
              hover:opacity-100 hover:grayscale-0 hover:scale-105
              active:opacity-100 active:grayscale-0 active:scale-105
              focus-visible:opacity-100 focus-visible:grayscale-0
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lightOrange
            "
          >
            <div className="transition-transform duration-300 group-hover:-translate-y-1 group-active:-translate-y-1">
              {client.icon}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Clients;