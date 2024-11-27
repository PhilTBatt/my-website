/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'section-colour': '#3376A1',
        'project-colour': '#FF6978',
        'project-hover-colour': '#49D49D',
        'text-colour': '#000000',
      }
    },
  },
  plugins: [],
}