module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: ['./src/**/*.tsx'],
    options: {
      whitelist: [],
    },
  },
  theme: {
    fontFamily: {
      sans: ['Open Sans', '-apple-system', 'sans-serif'],
      serif: ['Merriweather', '-apple-system', 'serif'],
    },
    fontWeight: {
      normal: 400,
      semibold: 600,
    },
    fontSize: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1.125rem', // 16px
      lg: '1.2rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.375rem', // 22px
      '2xl': '1.625rem', // 26px
      '3xl': '2rem', // 32px
      '4xl': '2.625rem', // 42px
      '5xl': '3.875rem', // 62px
    },
    lineHeight: {
      1: '1.25rem', // 20px
      2: '1.375rem', // 22px
      3: '1.625rem', // 26px
      4: '1.875rem', // 30px
      5: '2rem', // 32px
      6: '2.1875rem', // 35px
      7: '2.75rem', // 44px
      8: '3.625rem', // 58px
      9: '5.125rem', // 82px
    },
    colors: {
      inherit: 'inherit',
      white: '#FFF',
      black: '#000',
      primary: 'var(--primary)',
      gray: {
        1: 'var(--gray1)',
        2: 'var(--gray2)',
      },
      darkBlack: 'var(--darkBlack)',
    },

    extend: {
      screens: {
        light: {raw: '(prefers-color-scheme: light)'},
        dark: {raw: '(prefers-color-scheme: dark)'},
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus'],
    textColor: ['responsive', 'hover', 'focus', 'visited'],
    opacity: ['visited', 'hover'],
    backgroundOpacity: ['visited', 'hover'],
    underline: ['hover'],
  },
  plugins: [],
};
