/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      center: true,
    },
    extend: {
      colors: {
        redDominan: "#F13B2F",
      },
      backgroundImage: {
        saldoImg: "url('./src/assets/Background Saldo.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [require("daisyui")],
};
