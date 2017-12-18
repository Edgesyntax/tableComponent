const webpack = require("webpack");
const {join, resolve} = require("path");

module.exports = {
  entry: {
    table: "./src/table/table.control.jsx"
  },
  output: {
    path: join(__dirname,"dist"),
    filename: "[name].js",
    library: "tableComponent",
    libraryTarget: "umd"
  },
  module:{
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/},
      { test: /\.css/, use: ['style-loader', 'css-loader'], exclude: /node_modules/}
    ]
  },
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({
  //     compress: {
  //       warnings: false
  //     }
  //   })
  // ],
  externals: {
    react: "react",
    "react-dom": "react-dom"
  }
};
