/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-background-mobile":
          "url('../assets/Images/home-images/background-home-mobile.jpg')",
      },
      colors: {
        "dark-blue": "#0b0d17",
        "sky-blue": "#d0d6f9",
      },
      fontFamily: {
        serif: ["var(--font-bellefair)", "serif"], // for h1-h4, subhead1
        sans: ["var(--font-barlow)", "sans-serif"], // for h5, subhead2, nav text, body
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
