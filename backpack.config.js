const tsLoader = require('./ts-loader')

module.exports = {
  webpack: (config) => {
    config.entry.main = './server/index.ts'
    tsLoader(config)
    return config
  }
}
