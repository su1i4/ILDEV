import React from "react";

const PrestigeTowerInfo = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4">
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Left Panel */}
        <div className="bg-neutral-900 rounded-lg p-6 flex flex-col gap-6">
          {/* Logo and Menu */}
          <div className="flex justify-between items-center">
            <img
              src="/api/placeholder/120/40"
              alt="Prestige Logo"
              className="h-8"
            />
            <button className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold tracking-wider">PRESTIGE TOWER</h1>

          <p className="text-gray-400 text-sm">
            Это современный бизнес-центр класса «А»,
            <br />
            спроектированный по новейшим
            <br />
            технологиям мирового стандарта
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <button className="w-full bg-white text-black py-3 rounded-lg font-medium">
              Продажа
            </button>
            <button className="w-full bg-gray-800 text-white py-3 rounded-lg font-medium">
              Аренда
            </button>
          </div>

          {/* Property Details */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Об объекте</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span className="text-gray-400">Красная книга</span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                <span className="text-gray-400">Территория: 21 сотка</span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  />
                </svg>
                <span className="text-gray-400">
                  Площадь: от 30.07 м² до 625.27 м²
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Center Panel */}
        <div className="bg-neutral-900 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <img
              src="/api/placeholder/120/40"
              alt="Prestige Logo"
              className="h-8"
            />
            <button className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Building Image */}
          <div className="relative h-96 w-full mb-6">
            <img
              src="/api/placeholder/400/500"
              alt="Building Preview"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Video Section */}
          <div className="bg-gray-800 rounded-lg p-4 flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-400">Prestige Tower video</p>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="bg-neutral-900 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <img
              src="/api/placeholder/120/40"
              alt="Prestige Logo"
              className="h-8"
            />
            <button className="text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Map Section */}
          <div className="relative h-full w-full rounded-lg overflow-hidden">
            <img
              src="/api/placeholder/400/800"
              alt="Location Map"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-6 right-6">
              <button className="bg-white text-black px-6 py-3 rounded-lg font-medium">
                Получить консультацию
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrestigeTowerInfo;
