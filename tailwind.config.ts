import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      // },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
      colors: {
        primary: '#f5f5f5', // soft white background
        secondary: '#333333', // subtle dark text color
        accent: '#0066ff', // cool accent color
      },
      spacing: {
        '1/2': '50%',
        '3/4': '75%',
      },
    },
  },
  plugins: [],
};
export default config;
