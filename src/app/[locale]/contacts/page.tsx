"use client";
import useWindowWidth from "@/hooks/useWindowWidth";
import { SocialMediaDisplay } from "@/lib/data/socials.data";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const Contacts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations();
  const width = useWindowWidth();

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  const currentWidth = width > 770 ? "80px" : "40px";

  return (
    <div className="w-full mx-auto container min-h-screen overflow-y-auto pt-[250px] md:pt-[150px]">
      <div className="flex lg:flex-col justify-between items-center gap-10 max-w-[90%] md:max-w-[85%] lg:max-w-[80%] mx-auto">
        <div
          className={`text-white text-center lg:text-left mb-4 lg:mb-0 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          } transition-all duration-700`}
        >
          <h2 className="text-[64px] sm:text-[48px] font-bold mb-4">
            {t("contacts.email")}
          </h2>
          <a
            href="mailto:ildevkg@gmail.com"
            className="flex items-center justify-center lg:justify-start gap-2 text-lg hover:opacity-80 transition-opacity"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="sm:w-[30px] sm:h-[30px]"
            >
              <g clipPath="url(#clip-contacts-email)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15 30C6.72896 30 0 23.271 0 15C0 6.72896 6.72896 0 15 0C23.271 0 30 6.72896 30 15C30 23.271 23.271 30 15 30ZM22.7788 20.2694C22.8677 20.2693 22.953 20.2339 23.0159 20.171C23.0788 20.1081 23.1141 20.0229 23.1142 19.9339V10.5169L15.4824 16.5774C15.3412 16.6896 15.1705 16.7457 14.9999 16.7457C14.8294 16.7457 14.6587 16.6896 14.5175 16.5774L6.8857 10.5169V19.9339C6.88581 20.0229 6.92119 20.1081 6.98407 20.171C7.04696 20.2339 7.13222 20.2693 7.22115 20.2694H22.7788ZM21.6093 9.73061L15 14.9791L8.39068 9.73061H21.6093ZM24.666 10.0661V19.9341C24.666 20.9746 23.8194 21.8212 22.7788 21.8212H7.22115C6.18053 21.8212 5.33402 20.9746 5.33402 19.9341V10.0661C5.33402 9.02549 6.18059 8.17893 7.22115 8.17893H22.7788C23.8194 8.17887 24.666 9.02549 24.666 10.0661Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip-contacts-email">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="text-[18px] sm:text-lg font-[300]">
              ildevkg@gmail.com
            </span>
          </a>
        </div>

        <div className="flex ml:flex-col items-center gap-10">
          <a
            href="tel:+996777792777"
            className={`w-[400px] h-[400px] sm:w-48 sm:h-48 md:w-64 md:h-64 bg-yellow-600 rounded-full flex flex-col items-center justify-center gap-4 sm:gap-[15px] lg:gap-[30px] text-black font-bold shadow-lg transition-all duration-700 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            } hover:scale-110`}
          >
            <span className="text-[54px] sm:text-4xl font-semibold">
              {t("contacts.contact")}
            </span>
            <span className="italic text-[34px] md:text-2xl font-medium text-center px-4">
              +996 777 79 27 77
            </span>
          </a>

          <div
            className={`w-[400px] h-[400px] sm:w-48 sm:h-48 md:w-64 md:h-64 bg-[#B0183C] rounded-full flex items-center justify-center shadow-lg transition-all duration-700 sm:mt-0 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            } hover:scale-110`}
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-3 md:gap-4 text-white">
              {SocialMediaDisplay(currentWidth, currentWidth).map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  title={item.label}
                  className="cursor-pointer block hover:scale-110 transition-transform"
                >
                  {item.icon()}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;