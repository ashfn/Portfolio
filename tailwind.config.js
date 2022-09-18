/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        animation: {
          'blinking_term': 'blinking_term 0.8s infinite',
        },
        blinking_term: {
          '0%': { color: 'warning' },
          '49%': { color: 'transparent' },
          '50%': { color: 'transparent' },
          '99%': { color: 'transparent' },
          '100%': { color: 'warning' },
        }
      }
    },
    colors: {
      primary: '#003366',
      'a':'#cce5ff',
      'b':'#99ccff',
      'c':'#66b2ff',
      'd':'#3299ff',
      'e':'#007fff',
      'f':'#0066cc',
      'g':'#004c99',
      'h':'#003366',
      'i':'#001933',
      'j':'#37cdbe'
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        authorises: {
          primary: "#3299ff",
          secondary: "#66b2ff",
          accent: "#37cdbe",
          neutral: "#99ccff",
          info: "#cce5ff",
          "base-100": "#001933",
          "base-200": "#003366",
          "base-300": "#004c99",
          "test": "001933"
        }
      },
      "dark",
      "cupcake",
    ],
  },
}
