// See css-modules-require-hook
// and https://github.com/webpack/loader-utils#interpolatename

import path from 'path'
import pkg from '../../package.json'

module.exports = {
  generateScopedName: pkg.config.cssClassPattern,
  rootDir: path.join(__dirname, '..')
}
