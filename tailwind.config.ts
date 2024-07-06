import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#8D6F64',
        'secondary': '#AABD8C',
        'accent-1': '#f7f8f9',
        'ring': '#E9E3B4',
        'text': '#4b5563',
        'text-dark': '#dedede',
        'accent-text': '#6b7280',
        'accent-text-dark': '#a8ad9f',
        'visited': '#551A8B',
        'visited-dark': '#cb94ff',
        'link': '#0068ff',
        'link-dark': '#75acff',
        'info': '#41b6e6',
        'warning': '#ffc845',
        'error': '#d3273e',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      fontFamily: {
        sans: ['Inter'],
        display: ['Alegreya Sans'],
        body: ['Literata']
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
export default config
