import Container from "@/shared/container";
import PlatformCategory from "@/screens/platform-category";
import { Props } from "@/common";
import { unstable_setRequestLocale, getTranslations } from "next-intl/server";

const Vacancies = async ({ params }: Props) => {
  const { locale } = await params;
  unstable_setRequestLocale(locale);

  const t = await getTranslations();

  return (
    <div className="w-full mx-auto container h-[100vh] overflow-y-auto flex flex-col gap-[100px]">
      <Container>
        <div className="mt-[100px]">
          <h1 className="text-[64px] font-[600] mb-[20px] xs:text-[24px] md:text-[32px] lg:text-[38px]">
            {t("vacancies.title")}
          </h1>
          <p className="text-[24px] font-[400px] leading-[22.6px] max-w-[776px] xs:text-[15px] md:text-[15px]">
            {t("vacancies.desc")}
          </p>
        </div>
      </Container>

      <PlatformCategory />
    </div>
  );
};

export default Vacancies;