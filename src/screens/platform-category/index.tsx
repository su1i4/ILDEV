"use client";
import QuestionForm from "@/components/form";
import { useRouter } from "@/navigation";
import { useTranslations } from "next-intl";

const PlatformCategory = () => {
  const router = useRouter();
  const t = useTranslations();
  return (
    <section className="w-[90%] m-auto">
      <h3 className="text-[48px] font-[500] mb-[30px] md:text-[32px] xs:text-[24px]">
        {t("vacancies.categories.title")}
      </h3>
      <ul className="flex flex-col gap-[20px]">
        {[
          {
            title: "Backend go developer",
            url: "backend",
          },
          { title: "IOS developer", url: "ios" },
          {
            title: "Android developer",
            url: "android-developer",
          },
          {
            title: "Backend developer python",
            url: "backend-python",
          },
          {
            title: "QA engineer",
            url: "qa-engineer",
          },
          {
            title: t("vacancies.categories.bux"),
            url: "accountant",
          },
        ].map((item: { title: string; url: string }) => (
          <li
            key={item.title}
            className="bg-[#18191E] p-[30px] rounded-[30px] font-[500] text-[32px] md:text-[24px] xs:text-[20px]"
            onClick={() => router.push("/vacancies/" + item.url)}
          >
            {item.title}
          </li>
        ))}
      </ul>
      <QuestionForm
        title={t("vacancies.question_form")}
        description={t("vacancies.desc_form")}
        textarea
      />
    </section>
  );
};

export default PlatformCategory;
