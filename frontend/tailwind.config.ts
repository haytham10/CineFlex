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
        primary: '#001F3F',       // Midnight Blue
        secondary: '#E2BE00',     // Gold
        accent: '#800020',        // Popcorn Red
        background: '#333333',    // Charcoal Gray
        text: '#D3D3D3',          // Light Gray
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        'condensed': ['Roboto Condensed', 'sans-serif'],
      },
      fontSize: {
        'h1': '36px',
        'h2': '24px',
        'h3': '20px',
        'body': '16px',
        'small': '14px',
      },
      lineHeight: {
        'tight': '1.2',
        'normal': '1.5',
      },
    },
  },
  variants: {},
  plugins: [],
};
export default config;
