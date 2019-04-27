const path = require('path')
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  entry: "./src/js/index.js",
  output: {
    path: path.resolve("dist"),
    filename: "main.js"
  },
  module: {
    rules: [
      
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
        loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      },

      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },

      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },


      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }

    ]
  },
  plugins: [htmlPlugin]
};