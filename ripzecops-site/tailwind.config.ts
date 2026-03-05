import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        button: ["var(--font-button)", "sans-serif"],
      },
      colors: {
        stark: {
          400: "#ff3333",
          500: "#e62429", // signature red
          600: "#bf1a22",
          700: "#99131a",
        },
        arc: {
          300: "#80ffff",
          400: "#4df2ff",
          500: "#00d2ff", // arc reactor blue
          600: "#00a3cc",
        },
        gold: {
          400: "#ffd54f",
          500: "#e5b91a", // titanium gold
          600: "#c79e00",
        },
        ink: {
          50: "#f0f2f5",
          100: "#daddf0",
          200: "#b9bdcf",
          600: "#2b303b",
          700: "#242730",
          800: "#1e2128",
          900: "#13151a",
          950: "#0b0c10" // deep stark base
        }
      },
      boxShadow: {
        soft: "0 12px 40px rgba(0, 0, 0, 0.4)",
        glow: "0 0 20px rgba(0, 210, 255, 0.5)",
        "glow-red": "0 0 20px rgba(230, 36, 41, 0.5)",
      },
      keyframes: {
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      animation: {
        shimmer: "shimmer 2s infinite",
        scan: "scan 4s linear infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      backgroundImage: {
        "hero-grad":
          "radial-gradient(1000px 500px at 30% 20%, rgba(230, 36, 41, 0.15), transparent 60%), radial-gradient(800px 400px at 75% 40%, rgba(0, 210, 255, 0.12), transparent 55%), linear-gradient(180deg, #0b0c10 0%, #13151a 100%)",
        glass:
          "linear-gradient(180deg, rgba(30, 33, 40, 0.78), rgba(19, 21, 26, 0.55))",
        "hud-grid": "linear-gradient(to right, rgba(0, 210, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 210, 255, 0.05) 1px, transparent 1px)",
        "hologram": "linear-gradient(rgba(0, 210, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 210, 255, 0.1) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
