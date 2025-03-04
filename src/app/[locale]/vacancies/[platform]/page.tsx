"use client";
import { useParams } from "next/navigation";
import Container from "@/shared/container";
import { PLATFORM } from "@/lib/data/platform";
import PlatformCategory from "@/screens/platform-category";
import { useTranslations } from "next-intl";

const BackendVacancies = () => {
  const { platform } = useParams();
  const t = useTranslations();

  const currentPlatform = PLATFORM(t).find((item) => item.id === platform);

  return (
    <div className="w-full h-[100vh] overflow-y-auto flex flex-col gap-[100px]">
      <Container>
        <div className="mt-[100px] mr-[179px]">
          <h1 className="text-[64px] font-[600] mb-[20px]">
            {currentPlatform?.title}
          </h1>
          <p className="text-[24px] font-[400px] leading-[22.6px]">
            {currentPlatform?.description}
          </p>
        </div>
      </Container>
      <Container>
        <div className="mb-8 flex gap-[20px]">
          <h2 className="text-[32px] font-medium mb-4 min-w-[162px]">
            {t("vacancies.conditional")}
          </h2>
          <ul className="space-y-2 leading-[22.6px]">
            {currentPlatform?.conditional?.map((condit: string, i: number) => (
              <li className="flex items-start" key={i}>
                <span className="text-[24px] font-[400] mr-2">•</span>
                <span>{condit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-[20px] mb-8">
          <h2 className="text-[32px] font-medium mb-4">
            {t("vacancies.pending")}
          </h2>
          <ul className="space-y-2 leading-[22.6px]">
            {currentPlatform?.pending?.map((condit: string, i: number) => (
              <li className="flex items-start" key={i}>
                <span className="text-[24px] font-[400] mr-2">•</span>
                <span>{condit}</span>
              </li>
            ))}
          </ul>
        </div>

        {Array.isArray(currentPlatform?.tasks) ? (
          <div className="flex gap-[20px]">
            <h2 className="text-[32px] font-medium mb-4 w-[162px]">
              {" "}
              {t("vacancies.tasks")}
            </h2>
            <ul className="space-y-2 leading-[22.6px]">
              {currentPlatform?.pending?.map((condit: string, i: number) => (
                <li className="flex items-start" key={i}>
                  <span className="text-[24px] font-[400] mr-2">•</span>
                  <span>{condit}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Container>

      <PlatformCategory />
    </div>
  );
};

export default BackendVacancies;
