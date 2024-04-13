import { nextui } from '@nextui-org/react'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'bg-image': `url('/bg.png')`,
        'gradient-core': 'linear-gradient(to right, #E61E4D 0%, #E31C5F 50%, #D70466 100%)',
        'gradient-core-hover':
          'radial-gradient(circle at center, #FF385C 0%, #E61E4D 27.5%, #E31C5F 40%, #D70466 57.5%, #BD1E59 75%, #BD1E59 100%)',
        'gradient-core-rtl': 'linear-gradient(to left, #E61E4D 0%, #E31C5F 50%, #D70466 100%)',
        'gradient-plus': 'inear-gradient(to right, #BD1E59 0%, #92174D 50%, #861453 100%)',
        'gradient-bg-plus-hover':
          'radial-gradient(circle at center, #D70466 0%, #BD1E59 30%, #92174D 55%, #861453 72.5%, #6C0D63 90%, #6C0D63 100%)',
        'gradient-plus-rtl': 'linear-gradient(to left, #BD1E59 0%, #92174D 50%, #861453 100%)',
        'gradient-bg-luxe': 'linear-gradient(to right, #59086E 0%, #460479 50%, #440589 100%)',
        'gradient-bg-luxe-rtl': 'linear-gradient(to left, #59086E 0%, #460479 50%, #440589 100%)',
        'gradient-bg-luxe-hover':
          'radial-gradient(circle at center, #6C0D63 0%, #59086E 30%, #460479 55%, #440589 72.5%, #3B07BB 90%, #3B07BB 100%)',
      },
      screens: {
        'large-device': '1742px',
      },
      boxShadow: {
        border: 'rgba(0,0,0,0.08) 0 1px 1px',
        'custom-1': 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px'
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '2rem',
          xl: '2rem',
          '2xl': '0rem',
        },
      },
      colors: {
        primary: '#222222',
        disabled: '#DDDDDD',
        error: '#C13515',
        'error-hover': '#B32505',
        teriary: '#B0B0B0',
        'teriary-hover': '#6A6A6A',
        'teriary-disabled': '#EBEBEB',
        core: '#FF385C',
        'bg-plus': '#92174D',
        'bg-luxe': '#460479',
        info: '#428BFF',
        success: '#008A05',
        'border-primary': '#222222',
        'faint': '#F7F7F7'
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
export default config
