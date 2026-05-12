import { useState, useEffect } from "react";

function useWindowWidth() {
  // Стартуем с 0 — безопасное значение для сервера
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // useEffect работает только в браузере, тут window уже есть
    const handleResize = () => setWidth(window.innerWidth);

    handleResize(); // сразу выставляем актуальное значение
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export default useWindowWidth;