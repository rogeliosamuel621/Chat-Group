const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  output: {
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist./'),
    publicPath: '/',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
        resolve: {
          extensions: ['.js', '.jsx'],
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        use: 'file-loader',
      },
    ],
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'public/index.html'),
    publicPath: '/',
    hot: true,
    port: 8080,
  },
};
