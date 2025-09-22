import type { Config } from 'tailwindcss';

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        teal: {
          800: '#0d3b3b',
          900: '#083838',
        },
        lime: {
          300: '#b9fbc0',
          400: '#98f5a0',
        },
        orange: {
          500: '#ff7b00',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
