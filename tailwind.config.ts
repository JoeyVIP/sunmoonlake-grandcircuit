import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lake: "#0A2540",
        racing: "#E63946",
        mist: "#D4A574",
        bg: "#0D0D0D",
        text: "#FFFFFF",
        "text-muted": "#94A3B8",
      },
      fontFamily: {
        heading: ["Archivo Black", "sans-serif"],
        body: ["Noto Sans TC", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
