import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        accent: {
          cyan: '#67e8f9',
          lime: '#bef264',
          coral: '#fb7185',
        },
        ink: {
          deep: '#05070c',
        },
      },
      keyframes: {
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGrid: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.4' },
        },
      },
      animation: {
        reveal: 'reveal 0.8s ease forwards',
        pulseGrid: 'pulseGrid 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
