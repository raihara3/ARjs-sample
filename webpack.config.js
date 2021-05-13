const path = require('path');

module.exports = {
  mode: 'development',
  watch: true,
  entry: './src/index.js',
  resolve: {
    extensions: [ '.js' ],
  },
  output: {
    path: path.resolve(__dirname, 'bundle'),
    filename: 'index.js'
  },
  devServer: {
    contentBase: './',
    compress: true,
    port: 8080,
    open: true
  }
};
