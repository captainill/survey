var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
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
    new ExtractTextPlugin('style.css'),
    new WebackGrowlErrorPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel'
      },
      { 
        test: /\.scss$/, 
        loader: ExtractTextPlugin.extract(
          // activate source maps via loader query
          'css?sourceMap!' +
          'sass?sourceMap'        
        )
      }      
    ]
  }
};
