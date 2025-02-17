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
      screens: {
        xl: { max: "1279px" }, // => @media (max-width: 1279px) { ... }
        ml: { max: "1060px" },
        lg: { max: "960px" }, // => @media (max-width: 1023px) { ... }
        md: { max: "768px" }, // => @media (max-width: 767px) { ... }
        sm: { max: "640px" }, // => @media (max-width: 639px) { ... }
        xs: { max: "440px" }, // => @media (max-width: 440px) { ... }
        "sm!": { min: "640px" },
      },
    },
  },
  plugins: [],
} satisfies Config;
