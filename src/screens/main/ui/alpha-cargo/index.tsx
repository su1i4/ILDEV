import React from "react";
import Dashboard from "@/assets/images/signin-image.png";
import Image from "next/image";

const AlphaCargo = () => {
  return (
    <div className="text-white p-8">
      <div className="flex justify-between items-center mb-20">
        <div className="w-1/2 animate-fadeInLeft">
          <h1 className="text-6xl font-bold mb-16">ALPHA CARGO</h1>

          <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-4">О ПРОЕКТЕ</h2>
            <p className="text-gray-300">
              Альфа Карго — лидер на рынке грузоперевозок одежды и текстиля из
              Кыргызстана в Россию. Совместно разработали цифровую экосистему
              для клиентов, включающую современный сайт и мобильное приложение,
              которые упрощают процесс отправки, отслеживания и оплаты грузов.
            </p>

            <ul className="space-y-2 text-gray-300">
              <li>• Оформить заявку на вывоз груза с удобной геолокацией.</li>
              <li>
                • Следить за статусом доставки в режиме реального времени.
              </li>
              <li>• Оплатить услуги онлайн.</li>
              <li>
                • Хранить, скачивать и управлять всей документацией в личном
                кабинете.
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="relative z-10 animate-float">
            <Image
              src={Dashboard}
              alt="Alpha Cargo Interface"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-8 animate-fadeInUp">
        <div className="border border-dashed border-[5px #D1D1D1] p-8">
          <h3 className="text-5xl font-bold mb-4">100 000+</h3>
          <p className="text-xl text-gray-400">пользователей</p>
        </div>

        <div className="border border-dashed border-[#D1D1D1] p-8">
          <h3 className="text-5xl font-bold mb-4">12</h3>
          <p className="text-xl text-gray-400">
            человек работали в этом проекте
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlphaCargo;

// Add to your global CSS or styles/Home.module.css
