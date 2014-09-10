var I18nPlugin = require('i18n-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

var options = {
  maxChunks: 1
}

module.exports = {
  entry: './src/main.js',
  output: {
    filename: './dist/bundle.js'
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin(options),
    new I18nPlugin(require("null"))
  ],
  loaders: [
    { test: /\.css$/, loaders: ["style", "css"] }
  ],
  resolve: {
    alias: {
      orion: path.join(__dirname, 'orion'),
      webtools: path.join(__dirname, 'webtools')
    }
  }
};