import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom neon color
        'neon': '#39ff14', 
      },
      boxShadow: {
        // Custom neon shadow utility
        'neon': '0 0 15px #39ff14', 
      },
      // Fonts defined here will create the 'font-mono' and 'font-sans' utilities
      fontFamily: {
        mono: ['var(--font-mono)', 'monospace'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config