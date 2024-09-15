/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          text: "#333",
          primary: "#3b82f6",
          accent: "#f59e0b",
          bg: "#f3f4f6",
        },
        dark: {
          text: "#e5e7eb",
          primary: "#60a5fa",
          accent: "#fcd34d",
          bg: "#1f2937",
        },
      },
    },
  },
  plugins: [],
};
