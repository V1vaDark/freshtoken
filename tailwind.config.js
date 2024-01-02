/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkzeroc: "#0E141F",
        darkzerohalf: "#112233",
        darkonec: "#151B26",
        darkonehalf: "#192532",
        darktwoc: "#1E2635", // #1AC786
        darkthreec: "#151a24"
      },
      backgroundImage: theme => ({
        'darkzero': `linear-gradient(135deg, ${theme('colors.darkzeroc')} 0%, ${theme('colors.darkzerohalf')} 100%)`,
        'darkone': `linear-gradient(135deg, ${theme('colors.darkonec')} 0%, ${theme('colors.darkonehalf')} 100%)`,
        'darktwo': `linear-gradient(135deg, ${theme('colors.darkthreec')} 0%, ${theme('colors.darktwoc')} 100%)`,
      }),
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
};
