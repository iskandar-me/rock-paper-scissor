/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      "scripts": {
        "build:css": "postcss styles.css -o output.css"
      }

    },
  },
  plugins: [],
}
