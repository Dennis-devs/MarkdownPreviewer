const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/docs"),
    filename: "bundle.js",
  },

  plugins:[
    new HTMLWebpackPlugin({
      template: './src/index.html'
    })
  ],

  target: "web",
  devServer: {
    port: "3000",
    static: ["./src"],
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/i, 
        use: ['style-loader', 'css-loader']
      }
    ],
  },
};