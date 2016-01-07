var webpack = require('webpack');
var path = require('path');
var entry = require('./entry.js');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('static/js/common.js');

module.exports = {
  entry: entry,
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js'],// 配置可以不书写的后缀名
    root: path.join(__dirname, 'public/')//配置绝对路径，alias、entry中会使用
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css'
      }, {
        test: /\.(jpg|png|gif)$/,
        loader: 'url?limit=8192'//小于8kb的图片转化为base64，css中其他的图片地址会被体会为打包的地址，此处用到了publicPath
      },
      {test: /\.vue$/, loader: 'vue'}
    ]
  },
  plugins: [
    commonsPlugin,
    new webpack.HotModuleReplacementPlugin()
  ]
};
