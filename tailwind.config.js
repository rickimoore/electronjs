/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        highlight: '#568AFF',
        highlight400: '#6A9EFF',
        highlight200: '#EEF9FF',
        textPrimary: '#202224',
        lightGrey: '#F1F4F9',
        background: '#F5F6FA'
      },
    },
  },
  plugins: [],
}
