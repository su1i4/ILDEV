import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
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
        "card-gradient":
          "linear-gradient(135deg, #15110e 0%, #4a2e1a 50%, #15110e 100%)",
        "services-glow":
          "radial-gradient(ellipse 75% 55% at 50% 20%, rgba(125,72,38,0.4) 0%, rgba(70,40,22,0.2) 35%, transparent 70%)",
      },
      keyframes: {
        gradientMove: {
          "0%, 100%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "100% 100%" },
        },
        glowDrift: {
          "0%, 100%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        orbFloat: {
          "0%": { transform: "translateX(-25vw) scale(0.85)", opacity: "0" },
          "15%": { opacity: "1" },
          "85%": { opacity: "1" },
          "100%": { transform: "translateX(125vw) scale(1.15)", opacity: "0" },
        },
      },
      animation: {
        gradientMove: "gradientMove 8s ease-in-out infinite",
        glowDrift: "glowDrift 12s ease-in-out infinite",
        orbFloat: "orbFloat linear infinite",
      },
      screens: {
        xl: { max: "1279px" }, // => @media (max-width: 1279px) { ... }
        ml: { max: "1060px" },
        lg: { max: "960px" }, // => @media (max-width: 1023px) { ... }
        md: { max: "768px" }, // => @media (max-width: 767px) { ... }
        sm: { max: "640px" }, // => @media (max-width: 639px) { ... }
        xs: { max: "450px" }, // => @media (max-width: 440px) { ... }
        ms: { max: "400px" }, // => @media (max-width: 375px) { ... }
        // "sm!": { min: "640px" },
      },
    },
  },
  plugins: [],
} satisfies Config;