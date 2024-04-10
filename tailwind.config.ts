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
        "custom-blue": "#00315E",
        "custom-yellow": "#DAF200",
        "custom-baby-blue": "#00BFD8"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        lobster: ["Lobster", "sans-serif"],
        caveat: ["Caveat", "sans-serif"],
        teko: ["Teko", "sans-serif"],
      },
      
    },
  },
  plugins: [],
};

export default config;
