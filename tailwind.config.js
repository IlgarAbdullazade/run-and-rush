/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/views/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-black-oblique)'],
        secondary: ['var(--font-book-oblique)'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(145deg,#54E3F5 0%, #08A3CA 100%)',
        'gradient-45': 'linear-gradient(45deg, var(--tw-gradient-stops))',
        'gradient-135': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          50: '#e4f7fb',
          100: '#bbeaf5',
          200: '#8edcee',
          300: '#61cee7',
          400: '#3fc4e2',
          500: '#1db9dd',
          DEFAULT: '#1db9dd',
          600: '#1ab2d9',
          700: '#15aad4',
          800: '#11a2cf',
          900: '#0a93c7',
          A100: '#f1fbff',
          A200: '#beebff',
          A400: '#8bdcff',
          A700: '#72d4ff',
        },
        secondary: '#8784D3',
        tertiary: '#5A57AC',
        customBlue: '#01B8FF',
        mainText: '#FFFFFF',
        textSecondary: '#A0A0A1',
        stroke: '#174956',
        background: '#101113',
        error: '#FF3B30',
        toastInfo: '#509af8',
        toastSuccess: '#84d65a',
        toastWarning: '#f7c752',
        toastError: '#ef665b',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          xs: '480px',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
      fontSize: {
        base: ['1rem', { lineHeight: '1.25rem' }],
        xl: ['1.25rem', { lineHeight: '1.5rem' }],
        '3xl': ['1.75rem', { lineHeight: '2rem' }],
        '4xl': ['1.875rem', { lineHeight: '2.5rem' }],
        '5xl': ['2.5rem', { lineHeight: '2.75rem' }],
        '7xl': ['4.5rem', { lineHeight: '5rem' }],
      },
      dropShadow: {
        social: '17px 28px 32px rgba(123, 172, 243, 0.19)',
      },
      boxShadow: {
        border:
          '0px 3px 6px 0px rgba(141, 145, 255, 0.40) inset, 0px -3px 6px 0px rgba(70, 75, 212, 0.50) inset',
        feature:
          '0px -12px 72px 0px rgba(41, 39, 130, 0.1), 0px 32px 40px 0px rgba(135, 132, 211, 0.32)',
        sneaker:
          '0px -12px 72px 0px rgba(41, 39, 130, 0.10), 0px 2px 1px 0px rgba(255, 255, 255, 0.50) inset, 0px 64px 128px 0px rgba(135, 132, 211, 0.32)',
        tape: '0px 0px 72px 0px rgba(0, 0, 0, 0.50)',
      },
      borderRadius: {
        '4xl': '1.75rem',
        '5xl': '2rem',
      },
      maxWidth: {
        '2xl': '1536px',
        full: '1920px',
      },
      rotate: {
        7: '7deg',
      },
      skew: {
        8: '8deg',
      },
      borderWidth: {
        6: '6px',
      },
      gridTemplateAreas: {
        htpDesktop: ['heading phone context'],
        htpMobile: ['heading heading', 'phone context'],
      },
      gridTemplateColumns: {
        htpDesktop: '1fr 16.5rem 1fr',
        htpMobile: ['1fr 1fr', '12rem 1fr'],
      },
    },
  },
  variants: {
    gridTemplateAreas: ['responsive'],
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
    require('@savvywombat/tailwindcss-grid-areas'),
  ],
}
