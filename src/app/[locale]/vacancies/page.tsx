import Container from "@/shared/container";
import PlatformCategory from "@/screens/platform-category";
import { Props } from "@/common";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

const Vacancies = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations();

  return (
    <div className="w-full h-[100vh] overflow-y-auto flex flex-col gap-[100px]">
      <Container>
        <div className="mt-[100px]">
          <h1 className="text-[64px] font-[600] mb-[20px]">
            {t("vacancies.title")}
          </h1>
          <p className="text-[24px] font-[400px] leading-[22.6px] max-w-[776px]">
            {t("vacancies.desc")}
          </p>
        </div>
      </Container>

      <PlatformCategory />
    </div>
  );
};

export default Vacancies;
