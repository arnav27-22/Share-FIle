import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090b",
        foreground: "#f4f4f5",
        card: {
          DEFAULT: "rgba(24, 24, 27, 0.75)",
          foreground: "#fafafa",
        },
        primary: {
          DEFAULT: "#eab308", // Yellow-500
          foreground: "#000000",
          hover: "#ca8a04",
        },
        accent: {
          DEFAULT: "#f59e0b", // Amber-500
          foreground: "#000000",
        },
        glass: {
          border: "rgba(234, 179, 8, 0.2)",
          bg: "rgba(24, 24, 27, 0.6)",
          hover: "rgba(234, 179, 8, 0.15)",
        },
      },
      backdropBlur: {
        xs: "2px",
        glass: "16px",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.5)",
        glow: "0 0 25px -5px rgba(234, 179, 8, 0.4)",
        "glow-amber": "0 0 25px -5px rgba(245, 158, 11, 0.5)",
      },
    },
  },
  plugins: [],
};
export default config;
