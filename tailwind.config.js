/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // toggle dark mode via a class on <html>
  content: [
    './src/**/*.{js,jsx,md,mdx}',
    './app/**/*.{js,jsx,md,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        primary: {
          light: 'hsl(0, 0%, 10%)',
          dark: 'hsl(0, 0%, 100%)'
        },
        surface: {
          light: 'hsl(0, 0%, 100%)',
          dark: 'hsl(0, 0%, 8%)'
        },
        muted: {
          light: 'hsl(0, 0%, 93%)',
          dark: 'hsl(0, 0%, 66%)'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};
