const webpack = require("webpack");

module.exports = {
  entry: {
    // table: "./src/table/table.component.jsx",
    table: "./src/table/table.component.jsx"
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
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({
  //     compress: {
  //       warnings: false
  //     }
  //   })
  // ],
  devServer:{
    contentBase: "storybook",
    publicPath: "/dist/",
    filename: "storybook.js"
  },
  externals: {
    react: "react",
    "react-dom": "react-dom"
  }
};
