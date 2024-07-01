import type { Config } from 'tailwindcss'

const config: Config = {
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
        'background': '#f9f9f9',
        'primary': '#003b49',
        'secondary': '#94a596',
        'primary-accent-1': '#d6d2c4',
        'primary-accent-2': '#007a78',
        'primary-accent-3': '#ffc845',
        'visited': '#9333ea',
        'link': '#2563eb',
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
