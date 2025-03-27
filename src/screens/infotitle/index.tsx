"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

interface InfoTitleProps {
  search?: boolean;
  texts: string[];
  onClick: () => void;
}

export default function InfoTitle({
  texts,
  search = false,
  onClick,
}: InfoTitleProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const t = useTranslations();

  const tabHandler = (i: number) => {
    setActiveTab(i);
    onClick();
  };

  return (
    <nav className="flex items-center justify-between bg-[#18191E] p-8 pb-6 rounded-[30px] w-full ">
      <ul className="flex gap-5 flex-wrap text-gray-500 text-lg font-medium">
        {texts?.map((text, i) => (
          <li
            key={text}
            onClick={() => tabHandler(i)}
            className={`cursor-pointer transition-all duration-300 ${
              i === activeTab
                ? "gradient-text flex items-center font-medium text-[48px] xs:h-[26px] md:text-[32px] xs:text-[24px]"
                : "text-gray-600 text-5xl md:text-3xl font-medium"
            }`}
          >
            {text}
          </li>
        ))}
      </ul>
      {search && (
        <input
          type="text"
          placeholder={t("global.search")}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-gray-700 hidden xl:block text-white px-4 py-2 w-full max-w-md rounded-full outline-none transition-all"
        />
      )}
    </nav>
  );
}
