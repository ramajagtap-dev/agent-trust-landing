/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#0B0F17",
        cardBg: "#111827",
        slateBg: "#0F172A",
        accentGreen: "#10B981",
        accentCyan: "#06B6D4",
        accentAmber: "#F59E0B",
        accentRed: "#EF4444",
      },
      boxShadow: {
        'glow-green': '0 0 20px rgba(16, 185, 129, 0.2)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.2)',
      }
    },
  },
  plugins: [],
}