/*
 * @Author: wangzhenggui jianjia.wzg@raycloud.com
 * @Date: 2022-08-08 16:53:53
 * @LastEditors: wangzhenggui jianjia.wzg@raycloud.com
 * @LastEditTime: 2022-08-12 09:54:43
 * @FilePath: /webpack-react-template/config/webpack.config.js
 * @Description: 
 * 
 * Copyright (c) 2022 by wangzhenggui jianjia.wzg@raycloud.com, All Rights Reserved. 
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: ['./src/index.js'], // TODO: 这里的路径是相对于根路径来的
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].js'
  },
  module: {
    rules: [{
      test: /.jsx?$/,
      use: [
        {
          loader: "babel-loader"
        }
      ],
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx'], // 这个不写入jsx,识别不了jsx文件
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '..', "public/index.html"),
    })
  ],
  devServer: {}
}