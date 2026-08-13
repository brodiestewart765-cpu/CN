import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary violet accent (extracted from reference)
        primary: {
          50: "#F3F1FE",
          100: "#EAE7FD",
          200: "#D8D2FB",
          300: "#BCB1F7",
          400: "#9B89F1",
          500: "#7C63EA",
          600: "#6D4FE6", // main accent
          700: "#5C3FD6",
          800: "#4C34B4",
          900: "#402E93",
        },
        ink: {
          900: "#101828", // headings
          800: "#1D2433",
          700: "#344054", // body
          600: "#475467",
          500: "#667085", // secondary
          400: "#98A2B3", // muted
          300: "#D0D5DD",
        },
        line: {
          DEFAULT: "#EAECF0",
          soft: "#F2F4F7",
        },
        surface: {
          DEFAULT: "#F7F8FA", // page background
          card: "#FFFFFF",
          sunken: "#F9FAFB",
        },
        success: {
          50: "#ECFDF3",
          100: "#D1FADF",
          500: "#12B76A",
          600: "#039855",
          700: "#027A48",
        },
        warning: {
          50: "#FFFAEB",
          100: "#FEF0C7",
          500: "#F79009",
          600: "#DC6803",
          700: "#B54708",
        },
        info: {
          50: "#EFF8FF",
          100: "#D1E9FF",
          500: "#2E90FA",
          600: "#1570EF",
          700: "#175CD3",
        },
        danger: {
          50: "#FEF3F2",
          100: "#FEE4E2",
          500: "#F04438",
          600: "#D92D20",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": ["11px", { lineHeight: "16px" }],
        xs: ["12px", { lineHeight: "18px" }],
        sm: ["13px", { lineHeight: "20px" }],
        base: ["14px", { lineHeight: "22px" }],
        md: ["15px", { lineHeight: "24px" }],
        lg: ["17px", { lineHeight: "26px" }],
        xl: ["20px", { lineHeight: "28px" }],
        "2xl": ["24px", { lineHeight: "32px" }],
        "3xl": ["30px", { lineHeight: "38px" }],
      },
      borderRadius: {
        sm: "6px",
        DEFAULT: "8px",
        md: "10px",
        lg: "12px",
        xl: "14px",
        "2xl": "18px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(16, 24, 40, 0.04), 0 1px 3px rgba(16, 24, 40, 0.06)",
        soft: "0 1px 3px rgba(16, 24, 40, 0.05)",
        pop: "0 8px 24px rgba(16, 24, 40, 0.10), 0 2px 6px rgba(16, 24, 40, 0.06)",
        kpi: "0 1px 2px rgba(16, 24, 40, 0.05)",
      },
      spacing: {
        "sidebar": "244px",
        "header": "64px",
      },
    },
  },
  plugins: [],
};

export default config;
