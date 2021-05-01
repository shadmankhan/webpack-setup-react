const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist/'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack React",
      template: path.join(__dirname, 'public/index.html'),
      filename: 'public/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    contentBase: path.resolve(__dirname, './dist'),
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  }
};

module.exports = config;