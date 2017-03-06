const webpack = require("webpack");

module.exports = {
  entry: {
    // table: "./src/table/table.component.jsx",
    storybook: "./storybook/main.jsx"
  },
  output: {
    path: "./storybook/dist",
    filename: "[name].js"
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
  }
};
