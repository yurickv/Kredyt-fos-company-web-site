import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_700: "#082548",
        primary_400: "#0A499C",
        primary_300: "#1C84B1",
        primary_200: "#79C2E1",
        primary_100: "#E1F6FF",
        netural_100: "#FFFFFF",
        netural_200: "#B0B0B0",
        netural_300: "#808080",
        accent_500: "#962B9F",
        accent_300: "#FA61FD",
      },
      backgroundImage: {
        gradient_1: "linear-gradient(94deg, #0B4D9D 36.82%, #2192B6 111.34%)",
        gradient_2: "linear-gradient(94deg, #287CE1 36.82%, #64DAFF 111.34%)",
        gradient_accent:
          "linear-gradient(118deg, #962B9F 8.27%, #FA61FD 110.39%)",
        gradient_section:
          "linear-gradient(90deg, #DAEAFE 0.05%, #8BB3DA 101.12%)",
      },
      screens: {
        sm: "320px",
        md: "744px",
        lg: "1280px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
