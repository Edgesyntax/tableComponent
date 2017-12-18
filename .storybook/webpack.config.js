// Node Modules
const { resolve } = require('path');

module.exports = {
  module: {
    rules: [
      { test: /\.css/, loaders: ['style-loader', 'css-loader'], include: resolve(__dirname, '../') },
      { test: /\.md$/, use: "raw-loader", exclude: /node_modules/ }
    ]
  },
};
