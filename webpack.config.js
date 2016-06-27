var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  // entry: APP_DIR + '/index.jsx', <= typescript will transpile index.tsx to index.js
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  devtool: "#inline-source-map"
  // Because typescript transpiles .tsx (equivalent to native .jsx) files to javascript
  // there is no need to use a loader for that.
  // ,
  // module : {
  //   loaders : [
  //     {
  //       test : /\.jsx?/,
  //       include : APP_DIR,
  //       loader : 'babel'
  //     }
  //   ]
  // }
};

module.exports = config;
