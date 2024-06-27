/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fdfdfe",
          "200": "#14101d",
          "300": "#080915",
          "400": "#0a0a0c",
          "500": "#00040f",
          "600": "#00040e",
          "700": "#00030d",
          "800": "#00030c",
          "900": "rgba(255, 255, 255, 0.6)",
          "1000": "rgba(255, 255, 255, 0.7)",
        },
        white: "#fff",
        darkturquoise: {
          "100": "#00d9f5",
          "200": "rgba(0, 217, 245, 0.7)",
        },
        mediumaquamarine: {
          "100": "#00d2aa",
          "200": "rgba(0, 210, 170, 0.7)",
        },
        mediumturquoise: "#5ce1e6",
        darkslategray: "#3f3e45",
        honeydew: "#dffff0",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        abel: "Abel",
      },
      borderRadius: {
        xl: "20px",
        "3xs": "10px",
        "181xl": "200px",
      },
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '50%': { width: '100%' },
          '100%': { width: '100%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
          '100%': { borderColor: 'black' },
        }
      },
      animation: {
        typing: 'typing 6s steps(30, end) infinite, blink .75s step-end ',
      },
    },
    fontSize: {
      "3xs": "10px",
      base: "16px",
      "4xs": "9px",
      xs: "12px",
      lg: "18px",
      "29xl": "48px",
      "xl-4": "20.4px",
      "21xl-9": "40.9px",
      "53xl": "72px",
      sm: "14px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
