/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#111827",
        hero: "#0F172A",

        gold: "#C9A227",
        "gold-hover": "#D4AF37",

        cream: "#F8F7F4",
        light: "#F3F4F6",

        heading: "#1F2937",
        body: "#6B7280",

        border: "#E5E7EB",
      },
    },
  },

  plugins: [],
};
