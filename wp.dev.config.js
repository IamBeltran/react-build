const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = { 
//	ENABLED USEFUL TOOLS FOR DEVELOPMENT
    mode: "development",
    watch: true,
    entry: './src/app/index.js',
    output: {
      path: path.resolve('dist'),
      filename: 'bundle.js'
    },
}
