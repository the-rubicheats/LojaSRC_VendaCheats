/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Definindo a nova cor do border-color
        borderPurple: '#9856f5',
      },
      borderColor: {
        // Aplicando a nova cor aos estilos existentes que usam border-color
        DEFAULT: '#9856f5',
        white: '#fff',
        black: '#000',
        primary: '#5546ff',
        'primary-hover': '#3f30dc',
        secondary: '#0076f1',
        'secondary-hover': '#0056b3',
        warning: '#f90',
        'warning-hover': '#b07c21',
        danger: '#e9162b',
        success: '#21a67a',
        'success-hover': '#14664b',
        dark: '#000',
        'yellow-100': '#f0a92e',
        'yellow-300': '#b07c21',
        'red-100': '#e9162b',
        'red-200': '#d81124',
        'red-300': '#a80f1e',
        'green-100': '#21a67a',
        'green-200': '#009e0f',
        'green-300': '#14664b',
        'blue-100': '#0076f1',
        'blue-200': '#086fda',
        'blue-300': '#0056b3',
        'grey-100': '#2e2e2e',
        'grey-200': '#6d6d6d',
        'grey-300': '#969696',
        'grey-400': '#ababab',
        'grey-500': '#d5d5d5',
        'grey-600': '#eaeaea',
        'grey-700': '#f5f5f5',
        'grey-800': '#262626',
        'black-100': '#000',
        'black-200': '#333',
        // Definindo a nova cor do border-color
        borderPurple: '#9856f5',
      },
      borderColor: {
        // Aplicando a nova cor aos estilos existentes que usam border-color
        DEFAULT: '#9856f5',
      },
      backgroundColor: {
        'black': '#000000',
      },
    },
  },
  plugins: [],
};
