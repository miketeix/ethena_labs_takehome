import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: ['var(--font-jamjuree)'],
      },
      colors: {
        blue: {
          100: '#B9D2F9',
          400: '#88B4F5',
          800: '#339AF0',
        },
        gray: {
          100: '#A09FA6',
          200: '#7E7D86',
          300: '#504F57',
          400: '#34343A',
          500: '#28282C',
          600: '#252528',
          700: '#18181B',
          800: '#0C0C0D',
        }
      }
    },
    
  },
  plugins: [],
}
export default config
