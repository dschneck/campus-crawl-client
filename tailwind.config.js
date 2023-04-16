/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './src/*.{html, ts, js',
      './index.html'
  ],
  theme: {
    extend: {
        fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
      }
    },
         colors: {
             'white': '#fbfffeff',
             'chestnut': '#a53f2bff',
             'xanthous': '#f3b40fff',
             'black': '#020202ff'
         }
  }
}

