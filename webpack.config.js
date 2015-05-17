var webpack = require('webpack');
var path = require('path');


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
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          stage: 0
        }
      }
    ]
  }
};
