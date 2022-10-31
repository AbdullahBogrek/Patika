/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-white': '#f1f2f6',
        'primary': "#24c486"
      },
    },
  },
  plugins: [],
}
