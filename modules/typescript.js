const tsLoader = require('../ts-loader')

module.exports = function() {
  // Add .ts extension for store, middleware and more
  this.nuxt.options.extensions.push('ts')
  // Extend build
  this.extendBuild(tsLoader)
}
