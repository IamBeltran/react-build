const path = require('path');

// Webpack Configuration
  module.exports = { 
    mode: "production",
    watch: true,
    entry: [
      './src/app/index.js'
    ],
    output: {
      path: path.resolve(__dirname, './src/public_html/assets/js/'),
      filename: 'bundle.js',
    },
    devtool: 'inline-source-map',
  };
