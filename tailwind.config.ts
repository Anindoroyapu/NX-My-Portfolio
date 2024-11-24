/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./anindo/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      xs: "425px",
      sm: "576px",
      md: "768px",
      lg: "991px",
      xl: "1199px",
      "2xl": "1399px",
      "3xl": "1599px",
      "4xl": "1799px",
      "5xl": "1999px",
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        primary: {
          DEFAULT: "var(--primary)",
          50: "var(--primary-50)",
          100: "var(--primary-100)",
          300: "var(--primary-300)",
          500: "var(--primary-500)",
          700: "var(--primary-700)",
          900: "var(--primary-900)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          50: "var(--secondary-50)",
          100: "var(--secondary-100)",
          300: "var(--secondary-300)",
          500: "var(--secondary-500)",
          700: "var(--secondary-700)",
          900: "var(--secondary-900)",
        },
        error: "var(--error)",
        warning: "var(--warning)",
        success: "var(--success)",
        "light-red": "var(--light-red)",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
      },
      spacing: {
        1.5: "0.375rem",
        2.5: "0.625rem",
        3.5: "0.938rem",
        4.5: "1.125rem",
        5.5: "1.375rem",
        6.5: "1.625rem",
        7.5: "1.875rem",
        8.5: "2.125rem",
        11: "2.75rem",
        12.5: "3.125rem",
        16.5: "4.375rem", //70px
        13: "3.25rem",
        14.5: "3.75rem",
        18: "4.5rem",
        21: "5.25rem",
        22: "5.5rem",
        24.5: "6.25rem",
        28.5: "9.688rem",
        30: "7.5rem",
        38: "9.5rem",
        42: "10.5rem",
        50: "12.5rem",
        68: "17rem",
        76: "19rem",
        84: "21rem",
        88: "22rem",
        92: "23rem",
        94: "23.5rem",
        98: "24.5rem",
        100: "25rem",
        104: "26rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        // 10px
        5: "5px",
        8: "8px",
        10: "10px",
        15: "15px",
        20: "20px",
        30: "30px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [],
};
