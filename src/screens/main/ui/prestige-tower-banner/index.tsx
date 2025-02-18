import Container from "@/shared/container";
import Image from "next/image";
import Dashboard from "@/assets/images/dashboard-graphic.png";

const PrestigeTowerBanner = () => {
  return (
    <Container>
      <section className="relative h-screen flex items-center px-6 lg:px-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 to-zinc-900/60" />
          <div className="w-full h-full">
            <Image
              src={Dashboard}
              alt="Prestige Tower"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            PRESTIGE TOWER
          </h1>
          <p className="text-xl lg:text-2xl text-gray-200 mb-8">
            Это современный бизнес-центр класса «A», спроектированный по
            новейшим технологиям мирового стандарта
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-3 bg-orange-600 rounded-md hover:bg-orange-700 transition-colors">
              Продажа
            </button>
            <button className="px-8 py-3 bg-zinc-700 rounded-md hover:bg-zinc-600 transition-colors">
              Аренда
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 lg:px-16 bg-zinc-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8">О ПРОЕКТЕ</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                Prestige Tower - это современный бизнес-центр, который сочетает
                в себе инновационные технологии, комфорт и престиж.
                Расположенный в центре города, он предоставляет идеальное место
                для развития вашего бизнеса.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3" />
                  Современные системы безопасности
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3" />
                  Энергоэффективные технологии
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3" />
                  Подземная парковка
                </li>
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src={Dashboard}
                alt="Building Interior"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default PrestigeTowerBanner;
