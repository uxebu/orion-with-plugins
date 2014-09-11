var I18nPlugin = require('i18n-webpack-plugin');
var ContextReplacementPlugin = require("webpack/lib/ContextReplacementPlugin");

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
    new I18nPlugin(null),
    new ContextReplacementPlugin(
        /\.\/stylers\/.+\/syntax$/,
        './stylers/application_javascript/syntax'
    )
  ],
  loaders: [
    { test: /\.css$/, loaders: ["style", "css"] }
  ],
  resolve: {
    alias: {
      orion: path.join(__dirname, 'orion'),
      webtools: path.join(__dirname, 'webtools'),
      keyBinding: path.join(__dirname, 'orion/keyBinding'),
      util: path.join(__dirname, 'orion/util'),
      regex: path.join(__dirname, 'orion/regex'),
      objects: path.join(__dirname, 'orion/objects'),
      defender: path.join(__dirname, 'orion/Deferred'),
      webui: path.join(__dirname, 'orion/webui/littlelib')
    }
  }
};
