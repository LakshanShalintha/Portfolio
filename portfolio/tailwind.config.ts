import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#efe6e7",
        darkHover: "#2a004a",
        darkTheme: "#11001F",
        lightTheme: "#e6e5e5",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"], 
        Ovo: ["Ovo", "serif"],
      },
      boxShadow:{
        'black': '4px 4px 0 #000',
        'white': '4px 4px 0 #fff',
      },
      gridTemplateColumns:{
        'auto': 'repeat(auto-fit, minimum(200px, 1rf))',
      }
    },
  },
  darkMode: 'selector',
  plugins: [],
} satisfies Config;
