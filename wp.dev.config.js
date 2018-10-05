const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = { 
    mode: "development",
    watch: true,
    entry: './src/app/index.js',
    output: {
      path: path.resolve(__dirname, './src/public_html/assets/js/'),
      filename: 'bundle.js'
    },
    devServer: {
      open: true,
      compress: true,
      port: 3000,
      before: function(app) {
        app.get('/', function(req, res) {
          //res.json({ custom: 'response' });
        });
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Development',
        template: path.resolve(__dirname,'./dist/index.html'),
        inject: true
      })
    ],
}
