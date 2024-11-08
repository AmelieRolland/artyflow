import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'light-pink': '#EAC9C1',
        'dark-pink': '#D46F59',
        'md-pink': '#D3AD9E',
        'pinker': '#AC4B36',
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
};

export default config;
