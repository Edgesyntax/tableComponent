// Node Modules
const { resolve } = require('path');

module.exports = {
  module: {
    rules: [
      // { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/, include: resolve(__dirname, '../') },
      // { test: /\.css/, loaders: ['style-loader', 'css-loader'], include: resolve(__dirname, '../') },
      { test: /\.md$/, use: "raw-loader", exclude: /node_modules/ }
    ]
  },
};
