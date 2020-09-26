module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx'],
  theme: {
    theme: {
      extend: {
        screens: {
          light: {raw: '(prefers-color-scheme: light)'},
          dark: {raw: '(prefers-color-scheme: dark)'},
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
