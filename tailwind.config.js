/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#1a1a2e',
        paper: '#fdfcf8',
        'paper-lines': '#e8e4dc',
        accent: '#2d5aa0',
        'accent-light': '#e8f0fe',
        highlight: '#d4a017',
        'highlight-light': '#fef9e7',
        grammar: {
          red: '#c0392b',
          'red-light': '#fdeaea',
          green: '#1e8449',
          'green-light': '#eafaf1',
          purple: '#8e44ad',
          'purple-light': '#f5eef8',
        }
      },
      fontFamily: {
        serif: ['Noto Serif SC', 'serif'],
        sans: ['Noto Sans SC', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
