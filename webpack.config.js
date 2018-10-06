const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = { 
  mode: "development",
  watch: true,
  entry: [
    './src/app/index.js'
  ],
  output: {
    path: path.resolve(__dirname, './src/public_html/assets/js/'),
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    compress: true,
    port: 9000,
    color: true,
    
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: path.resolve(__dirname,'./dist/index.html')
    })
  ],
}
