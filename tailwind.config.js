/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './src/*.html',
      './src/*.ts',
      './src/*.tsx',
      './src/*.js',
      './src/*.jsx',
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
             'black': '#020202ff',
             'rsoColor' : '#c46bae42',
             'privateColor' : '#048BA842',
             'publicColor' : '#2364AA42'
         }
  }
}

