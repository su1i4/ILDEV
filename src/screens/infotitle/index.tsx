"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

interface InfoTitleProps {
  search?: boolean;
  texts: string[];
  onClick: () => void;
  className?: string;
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
    <nav className="flex items-center justify-between md:flex-wrap lg:flex-col lg:items-start gap-4 bg-[#18191E] p-8 pb-6 rounded-[30px] w-full">
      <ul className="flex gap-5 flex-wrap text-gray-500 text-lg font-medium">
        {texts?.map((text, i) => (
          <li
            key={text}
            onClick={() => tabHandler(i)}
            className={`cursor-pointer transition-all duration-300 text-[48px] md:text-3xl font-medium leading-[0.9] ${
              i === activeTab
                ? "bg-gradient-to-r from-[#BA2025] via-[#A6181B] via-[#DB7746] via-[#CF6F35] to-[#D57238] bg-clip-text text-transparent"
                : "text-[#36373C] text-5xl md:text-3xl"
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
          className="bg-gray-700 text-white px-4 py-2 w-full lg:max-w-full max-w-md rounded-full outline-none transition-all"
        />
      )}
    </nav>
  );
}