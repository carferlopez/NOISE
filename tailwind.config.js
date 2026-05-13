/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#f6f8ef',
        'cream-dark': '#e8ecdc',
        coral: '#ff5757',
        'coral-dark': '#e63d3d',
        dark: {
          50: '#f6f6f7',
          100: '#e2e3e5',
          200: '#c4c5ca',
          300: '#9fa1a9',
          400: '#7b7d87',
          500: '#61636d',
          600: '#4d4e57',
          700: '#3f4047',
          800: '#27282d',
          900: '#1a1b1f',
          950: '#111114',
        },
        evidence: {
          high: '#1f8a3c',
          medium: '#b88a00',
          low: '#dc2626',
        },
      },
    },
  },
  plugins: [],
}
