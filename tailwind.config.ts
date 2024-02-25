/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        exo: ["Exo", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "primary-green": "#25C269",
        "secondary-orange": "#FF9933",
      },
      backgroundImage: {
        "become-expert-banner": "url('/assets/images/banner.png')",
        "congrats-banner": "url('/assets/images/congrats.svg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
