import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/**/*.tsx",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "./components/**/*.tsx",
  ],
  theme: {
    extend: {
      animation: {
        typewriter: "typewriter 3.5s steps(23) forwards",
        blink: "blink 500ms steps(23) forwards infinite",
      },
      keyframes: {
        typewriter: {
          to: { left: "100%" },
        },
        blink: {
          to: { backgroundColor: "transparent" },
        },
      },
      backgroundImage: {
        "sonoma-wallpaper": "url('./public/sonoma.jpg')",
      },
      fontFamily: {
        // sans: ["var(--font-sans)", ...fontFamily.sans],
        body: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],

        // custom: ["SF-PRO", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
} satisfies Config;
