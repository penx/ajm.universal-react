module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-global-import': {},
    'postcss-discard-comments': {},
    'postcss-inline-svg': {},
    'postcss-modules-values': {},
    'postcss-cssnext': {
      browsers: ['last 2 versions', '> 5%'],
    },
    precss: {},
    'postcss-sass-color-functions': {},
  }
}
