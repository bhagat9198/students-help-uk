/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'map': "url('/assets/images/map.jpg')",
        'reviews': "url('/assets/images/reviews.png')",
        'blog': "url('/assets/images/blog.png')",
      },
      colors: {
        // Configure your color palette here
        'primary': '#2986CC',
        'secondary': '#ffe200',
        'subSecondary': '#000',
        'primary-light-1': '#3e92d1',
        'primary-light-2': '#2986CC',
        'primary-light-3': '#539ed6',
        'primary-light-4': '#69aadb',
        'primary-light-5': '#7eb6e0',
        'primary-dark-1': '#2478b7',
        'primary-dark-2': '#206ba3',
        'primary-dark-3': '#1c5d8e',
        'primary-dark-4': '#18507a',
        'primary-dark-5': '#144366',
        'secondary-light-1': '#ffe419',
        'secondary-light-2': '#ffe732',
        'secondary-light-3': '#ffea4c',
        'secondary-light-4': '#ffed66',
        'secondary-light-5': '#fff07f',
        'secondary-dark-1': '#e5cb00',
        'secondary-dark-2': '#ccb400',
        'secondary-dark-3': '#b29e00',
        'secondary-dark-4': '#998700',
        'secondary-dark-5': '#7f7100',
      }
    },

  },
  plugins: [],
}
