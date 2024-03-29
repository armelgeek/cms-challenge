/** @type {import('tailwindcss').Config} */
const defaultTheme  = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const forms = require('@tailwindcss/forms');
const variables = require('@mertasan/tailwindcss-variables');
const typography = require('@tailwindcss/typography');
const aspect = require('@tailwindcss/aspect-ratio');
const radix =  require("tailwindcss-radix");
const { addDynamicIconSelectors } = require('@iconify/tailwind');
// Add your custom theme colors here
const allColors = {
  primary: colors.indigo,
  secondary: colors.gray,
  success: colors.emerald,
  warning: colors.amber,
  danger: colors.rose,
  info: colors.indigo,
  dark: colors.slate,
   transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            blue: colors.blue,
            cyan: colors.cyan,
            emerald: colors.emerald,
            fuchsia: colors.fuchsia,
            slate: colors.slate,
            gray: colors.gray,
            neutral: colors.neutral,
            stone: colors.stone,
            green: colors.green,
            indigo: colors.indigo,
            lime: colors.lime,
            orange: colors.orange,
            pink: colors.pink,
            purple: colors.purple,
            red: colors.red,
            rose: colors.rose,
            sky: colors.sky,
            teal: colors.teal,
            violet: colors.violet,
            yellow: colors.amber,
            white: colors.white,
};

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,css,scss,js,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Mali', ...defaultTheme.fontFamily.sans],
      'poppins': ['Poppins', 'sans-serif']
    },
    container: {
      center: true,
      screens: {
        'sm': {'min': '640px', 'max': '767px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }
  
        'md': {'min': '768px', 'max': '1023px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
  
        'lg': {'min': '1024px', 'max': '1279px'},
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
        'xl': {'min': '1280px', 'max': '1535px'},
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
  
        '2xl': {'min': '1536px'},
        // => @media (min-width: 1536px) { ... }
      },
    },
    extend: {
      transitionProperty: {
        width: 'width',
        height: 'height',
        margin: 'margin',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'face-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'fade-out': {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 250ms ease-in-out',
        'fade-in-down': 'fade-in-down 250ms ease-in-out',
        'fade-in': 'fade-in 250ms ease-in-out',
        'fade-out': 'fade-out 250ms ease-in-out',
      },

      colors: allColors,
      variables: {
        DEFAULT: {
          ...allColors,
        },
      },
      borderRadius: {
        primary: '0.4rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.slate.700'),
            '--tw-prose-headings': theme('colors.slate.700'),
            '--tw-prose-lead': theme('colors.slate.600'),
            '--tw-prose-links': theme('colors.primary.500'),
            '--tw-prose-bold': theme('colors.slate.700'),
            '--tw-prose-counters': theme('colors.slate.600'),
            '--tw-prose-bullets': theme('colors.slate.700'),
            '--tw-prose-hr': theme('colors.slate.200'),
            '--tw-prose-quotes': theme('colors.slate.600'),
            '--tw-prose-quote-borders': theme('colors.slate.200'),
            '--tw-prose-captions': theme('colors.slate.600'),
            '--tw-prose-code': theme('colors.slate.700'),
            '--tw-prose-pre-code': theme('colors.slate.200'),
            '--tw-prose-pre-bg': theme('colors.slate.900'),
            '--tw-prose-th-borders': theme('colors.slate.200'),
            '--tw-prose-td-borders': theme('colors.slate.200'),
            '--tw-prose-invert-body': theme('colors.slate.200'),
            '--tw-prose-invert-headings': theme('colors.slate.200'),
            '--tw-prose-invert-lead': theme('colors.slate.300'),
            '--tw-prose-invert-links': theme('colors.primary.500'),
            '--tw-prose-invert-bold': theme('colors.slate.200'),
            '--tw-prose-invert-counters': theme('colors.slate.300'),
            '--tw-prose-invert-bullets': theme('colors.slate.200'),
            '--tw-prose-invert-hr': theme('colors.slate.600'),
            '--tw-prose-invert-quotes': theme('colors.slate.300'),
            '--tw-prose-invert-quote-borders': theme('colors.slate.600'),
            '--tw-prose-invert-captions': theme('colors.slate.300'),
            '--tw-prose-invert-code': theme('colors.slate.200'),
            '--tw-prose-invert-pre-code': theme('colors.slate.200'),
            '--tw-prose-invert-pre-bg': theme('colors.slate.900'),
            '--tw-prose-invert-th-borders': theme('colors.slate.600'),
            '--tw-prose-invert-td-borders': theme('colors.slate.600'),
            a: {
              color: theme('colors.primary.500'),
              '&:hover': {
                color: theme('colors.primary.600'),
              },
            },
            table: {
              overflowX: 'auto',
            }
          },
        },
      }),
      
    },
  },
  plugins: [
    forms,
    variables,
    typography,
    aspect,
    radix({
      variantPrefix: "tx",
    }),
    addDynamicIconSelectors()
  ],
}

