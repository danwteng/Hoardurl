const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname,'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  module:{
    rules:[
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname,'src', 'index.html'),
    }),
  ],

  devServer:{
    static: {
      directory: path.join(__dirname,'src', 'index.html'),
    },
    compress: true,
    port: 8080,
    proxy: {'/': 'http://localhost:3000'}
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },
}