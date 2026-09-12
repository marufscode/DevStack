/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F172A",
        surface: "#FFFFFF",
        muted: "#64748B",
      },
      // Single source of truth for the brand gradient (orange -> pink -> violet).
      // Change these three stops and every gradient usage across the app updates.
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #FB923C 0%, #EC4899 55%, #8B5CF6 100%)",
        "brand-gradient-soft": "linear-gradient(135deg, rgba(251,146,60,0.12) 0%, rgba(236,72,153,0.10) 55%, rgba(139,92,246,0.12) 100%)",
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,18,34,0.04), 0 8px 24px rgba(15,18,34,0.06)",
        cardHover: "0 4px 10px rgba(15,18,34,0.06), 0 16px 32px rgba(15,18,34,0.10)",
      },
    },
  },
  plugins: [],
};
