const webpack = require("webpack");

module.exports = {
  entry: {
    table: "./src/table/table.control.jsx"
  },
  output: {
    path: "./dist",
    filename: "[name].js",
    library: "tableComponent",
    libraryTarget: "umd"
  },
  module:{
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.yaml$/,
        loader: 'yml',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  externals: {
    react: "react",
    "react-dom": "react-dom",
    radium: "radium"
  }
};
