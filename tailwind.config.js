/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        azulProfundo: "#1a3970",
        azulMarino: "#0d2c5b",
        azulCielo:"#9bbfd7",
        azulAcero:"#547ea6",
        azulNiebla:"#e0eeef"
      },
    },
  },
  plugins: [],
};
