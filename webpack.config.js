const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    table: "./src/table/table.control.jsx"
  },
  output: {
    path: path.join(__dirname,"dist"),
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
      },
      {
        test: /\.css/,
        loaders: ['style-loader', 'css-loader'],
        include: __dirname + '/src/table'
      }
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
