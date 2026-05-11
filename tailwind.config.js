/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        masaro: {
          teal: "#4cbece",
          green: "#46a98a",
          "green-dark": "#3a8d73",
          navy: "#3e4095",
          "navy-light": "#484ba3",
          blue: "#6aaffd",
          dark: "#0f172a",
          "dark-light": "#1e293b",
          light: "#f0fdfa",
          white: "#ffffff",
        },
      },
      backgroundImage: {
        "masaro-gradient": "linear-gradient(135deg, #4cbece 0%, #46a98a 100%)",
        "masaro-gradient-dark": "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        "masaro-gradient-horizontal": "linear-gradient(90deg, #4cbece 0%, #46a98a 100%)",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      animation: {
        "scroll-left": "scrollLeft 30s linear infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      lg: "1280px",
      xl: "1440px",
    },
  },
  plugins: [],
};
