/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'inner2':'2px 2px 1px -4px rgba(0,0,0,0.75) inset',
        'inner2-hover':'6px 6px 1px -4px rgba(0,0,0,0.75) inset'
      }
    },
  },
  plugins: [],
};
