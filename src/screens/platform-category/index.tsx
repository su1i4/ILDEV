"use client";
import QuestionForm from "@/components/form";
import { useRouter } from "next/navigation";

const PlatformCategory = () => {
  const router = useRouter();
  return (
    <section className="w-[90%] m-auto">
      <h3 className="text-[48px] font-[500] mb-[30px]">Выбери категорию</h3>
      <ul className="flex flex-col gap-[20px]">
        {[
          {
            title: "Backend go developer",
            url: "backend",
          },
          { title: "IOS developer", url: "ios" },
          {
            title: "Android developer",
            url: "backend-python",
          },
          {
            title: "Backend developer python",
            url: "qa-engineer",
          },
          {
            title: "QA engineer",
            url: "qa-engineer",
          },
          {
            title: "Бухгалтер",
            url: "accountant",
          },
        ].map((item: { title: string; url: string }) => (
          <li
            key={item.title}
            className="bg-[#18191E] p-[30px] rounded-[30px] font-[500] text-[32px]"
            onClick={() => router.push("/vacancies/" + item.url)}
          >
            {item.title}
          </li>
        ))}
      </ul>
      <QuestionForm
        title="Нашел вакансию? Пиши"
        description="Заполните форму и мы свяжемся с вами в ближайшее время"
        textarea
      />
    </section>
  );
};

export default PlatformCategory;
