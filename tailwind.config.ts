import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#D0D3FF",
          200: "#151D8C",
          300: "#1224F1",
          400: "#0011FF",
          500: "#000659",
        },
        text: {
          700: "#212529",
          900: "#000333",
        },
        neutral: "#FFFFFF",
        dark: {
          100: "#363B4C",
          200: "#494F57",
          300: "#3B3B40",
          400: "#646464",
          500: "#000000",
        },
        accent: {
          100: "#00F0FF",
        },
      },
      backgroundImage: (theme) => ({
        "gradient-light":
          "linear-gradient(90.37deg, #D2D5FD 0.32%, #D8DAF8 22.3%, #EFE8E7 49.57%, #FEF3E2 99.68%)",
        "gradient-card":
          "linear-gradient(90.37deg, #CCCFFF 0.32%, #DBDEFF 22.3%, #E5E7FF 49.57%, #F5F5FF 99.68%)",
        "gradient-banner":
          "linear-gradient(275.8deg, #FEF3E3 1.51%, #F3F3FF 28.1%, #E4E6FF 55.68%, #CFD2FF 100%)",
      }),
      fontFamily: {
        merriweather: ["Merriweather", "serif"],
        "source-sans-pro": ["Source Sans Pro", "sans-serif"],
      },
      fontWeight: {
        400: "400",
        600: "600",
        700: "700",
        900: "900",
      },
      fontSize: {
        heading1: "61.65px",
        heading2: "54.8px",
        heading4: "43.3px",
        subheading1: "30.41px",
        subheading3: "24.03px",
        "text-s": "15px",
        "text-xs": "13.33px",
        "text-base": "16.88px",
        "card-text-body": "15px",
        "card-text-cta": "18px",
        "banner-cta": "16.9px",
        "testimonial-author-name": "17px",
        cta: "18px",
        "footer-heading": "17px",
        "footer-heading-2": "15px",
        "footer-links": "15px",
        "footer-links-2": "13px",
      },
      lineHeight: {
        heading1: "67.81px",
        heading2: "60.28px",
        heading4: "47.63px",
        subheading1: "33.45px",
        subheading3: "26.43px",
        "text-s": "24.75px",
        "text-xs": "22px",
        "text-base": "27.84px",
        "text-base-bold": "27.85px",
        "card-text-body": "24.75px",
        "card-text-cta": "19.8px",
        "banner-cta": "17px",
        "testimonial-author-name": "28.05px",
        cta: "24px",
        "footer-heading": "16px",
        "footer-heading-2": "16px",
        "footer-links": "15px",
        "footer-links-2": "15px",
      },
      letterSpacing: {
        "0.15": "0.15px",
        "0.01": "-0.01em",
        "2": "-2px",
        "1": "-1px",
      },
    },
  },
  plugins: [],
};
export default config;
