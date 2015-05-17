var webpack = require('webpack');
var path = require('path');
var WebackGrowlErrorPlugin = require('./js/lib/WebackGrowlErrorPlugin')


module.exports = {
  entry: [
    './js/client.js',
  ],
  devtool: 'eval-source-map',
  output: {
    path: path.join(__dirname, 'assets'),
    filename: 'client.js',
    publicPath: '/assets',
  },

  plugins: [
    new WebackGrowlErrorPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      }
    ]
  }
};
