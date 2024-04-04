/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#D3E7FF",
        dim: "#2C3148",
        skyBlue: "#74C8FF",
      },
      backgroundImage: {
        "planet-card-bg": "url('/src/assets/imgs/planet-card-bg.png')",
        "rectangle-card-bg": "url('/src/assets/imgs/rectangle.svg')",
      },
      fontFamily: {
        orbiton: ['"Orbitron", sans-serif'], 
        manrope: ['"Manrope", sans-serif'],
      },
    },
  },
  plugins: [],
};
