import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightDark: "var(--lightDark)",
        lightOrange: "var(--lightOrange)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(89.07deg, #BA2025 -0.5%, #A6181B 23.19%, #DB7746 47.33%, #CF6F35 72.49%, #D57238 96.87%)",
      },
      screens: {
        xl: { max: "1279px" }, // => @media (max-width: 1279px) { ... }
        ml: { max: "1060px" },
        lg: { max: "960px" }, // => @media (max-width: 1023px) { ... }
        md: { max: "768px" }, // => @media (max-width: 767px) { ... }
        sm: { max: "640px" }, // => @media (max-width: 639px) { ... }
        xs: { max: "450px" }, // => @media (max-width: 440px) { ... }
        "sm!": { min: "640px" },
      },
    },
  },
  plugins: [],
} satisfies Config;
