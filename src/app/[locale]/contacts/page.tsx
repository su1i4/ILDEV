"use client";
import { Socials } from "@/lib/data/socials.data";
import { useEffect, useState } from "react";

const Contacts = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  return (
    <div className="w-full h-[55vh] overflow-y-auto mt-[150px]">
      <div className="flex items-center justify-center p-10">
        <div className="flex justify-between items-center gap-10 max-w-5xl w-full">
          <div
            className={`text-white text-left ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            } transition-all duration-700`}
          >
            <h2 className="text-3xl font-bold mb-4">Почта:</h2>
            <div className="flex items-center gap-2 text-lg">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_251_5714)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15 30C6.72896 30 0 23.271 0 15C0 6.72896 6.72896 0 15 0C23.271 0 30 6.72896 30 15C30 23.271 23.271 30 15 30ZM22.7788 20.2694C22.8677 20.2693 22.953 20.2339 23.0159 20.171C23.0788 20.1081 23.1141 20.0229 23.1142 19.9339V10.5169L15.4824 16.5774C15.3412 16.6896 15.1705 16.7457 14.9999 16.7457C14.8294 16.7457 14.6587 16.6896 14.5175 16.5774L6.8857 10.5169V19.9339C6.88581 20.0229 6.92119 20.1081 6.98407 20.171C7.04696 20.2339 7.13222 20.2693 7.22115 20.2694H22.7788ZM21.6093 9.73061L15 14.9791L8.39068 9.73061H21.6093ZM24.666 10.0661V19.9341C24.666 20.9746 23.8194 21.8212 22.7788 21.8212H7.22115C6.18053 21.8212 5.33402 20.9746 5.33402 19.9341V10.0661C5.33402 9.02549 6.18059 8.17893 7.22115 8.17893H22.7788C23.8194 8.17887 24.666 9.02549 24.666 10.0661Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_251_5714">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span>ildev@info.kg</span>
            </div>
          </div>

          <div className="flex items center gap-10">
            <div
              className={`w-64 h-64 bg-yellow-600 rounded-full flex flex-col items-center justify-center text-black text-xl font-bold shadow-lg transition-all duration-700 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              } hover:scale-110`}
            >
              <span>Контакты:</span>
              <span className="italic text-lg">+7 777 777 77 77</span>
            </div>

            <div
              className={`w-64 h-64 bg-[#B0183C] rounded-full flex items-center justify-center shadow-lg transition-all duration-700 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              } hover:scale-110`}
            >
              <div className="grid grid-cols-2 gap-4 text-white text-3xl">
                {Socials.map((item, index) => (
                  <a className="cursor-pointer" key={index}>
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
