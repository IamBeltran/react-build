const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require("babel-register");

module.exports = { 
  mode: "development",
  entry: './src/app/index.js',
  output: {
    path: path.resolve(__dirname,'./src/public_html/assets/js/'),
    filename: 'bundle.js',
  },
  module: {
    rules : [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ],
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
    ignored: [
      'node_modules'
    ]
  },
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    compress: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      filename: 'index.html',
      template: path.resolve(__dirname,'./dist/index.html'),
      inject: 'body',
      hash: true,
      showErrors: true
    })
  ],
}
