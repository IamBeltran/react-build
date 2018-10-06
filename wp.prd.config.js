const path = require('path');

// Webpack Configuration
  module.exports = { 
    mode: "production",
    watch: true,
    entry: [
      './src/app/index.js'
    ],
    output: {
      path: path.resolve(__dirname,'./src/public_html/assets/js/'),
      filename: 'bundle.js'
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
  };
