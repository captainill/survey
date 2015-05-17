var webpack = require('webpack');
var path = require('path');


module.exports = {
  entry: [
    './js/client.js',
  ],

  output: {
    path: path.join(__dirname, 'assets'),
    filename: 'client.js',
    publicPath: '/assets',
  },

  plugins: [
    new webpack.IgnorePlugin(/vertx/) 
  ],

  module: {
    loaders: [
      { test: /\.(js|jsx)$/, exclude: /node_modules\/(?!react-router)/, loader: 'babel-loader?stage=0' }
    ],
  },
};
