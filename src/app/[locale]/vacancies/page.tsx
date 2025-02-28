import Container from "@/shared/container";
import PlatformCategory from "@/screens/platform-category";
import { Props } from "@/common";
import { unstable_setRequestLocale } from "next-intl/server";

const Vacancies = ({ params: { locale } }: Props) => {
  unstable_setRequestLocale(locale);

  return (
    <div className="w-full h-[100vh] overflow-y-auto flex flex-col gap-[100px]">
      <Container>
        <div className="mt-[100px]">
          <h1 className="text-[64px] font-[600] mb-[20px]">Вакансии</h1>
          <p className="text-[24px] font-[400px] leading-[22.6px] max-w-[776px]">
            ILDEV - команда профессионалов в области разработки, дизайна и
            машинного обучения. Каждый день миллионы людей в мире пользуются
            нашими сервисами и приложениями
          </p>
        </div>
      </Container>

      <PlatformCategory />
    </div>
  );
};

export default Vacancies;
