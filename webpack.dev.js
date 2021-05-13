const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist/"),
    clean: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack React",
      template: path.resolve(__dirname, "public", "index.html"),
      inject: true,
      filename: "index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /[\\/]node_modules[\\/]/,
      },
    ],
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    contentBase: path.resolve(__dirname, "./dist"),
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};

module.exports = config;
