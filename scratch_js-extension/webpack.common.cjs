// webpack config chrome extension

const path = require("path");

const DotenvPlugin = require("dotenv-webpack");
// const ESLintPlugin = require('eslint-webpack-plugin');

const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    // serviceWorker: "./public/service/serviceWorker.js",
    // popup: "./public/app/popup/popup.js",
    // options: "./public/app/option/options.js",
    app: "./src/App.jsx",
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build"),
    clean: true,
  },
  plugins: [
    // env variables
    new DotenvPlugin(),

    // ESLint
    // new ESLintPlugin({
    //   extensions: ['js', 'ts'],
    //   // overrideConfigFile: path.resolve(__dirname, '.eslintrc'),
    // }),
    // css
    new MiniCssExtractPlugin({
      filename: "styles/[name].css",
    }),
    new CopyPlugin({
      patterns: [
        // { from: "static" },
        { from: "public" },
        {
          from: "styles/*.min.css",
          to: ".",
        },
        {
          from: "styles/*.min.css.map",
          to: ".",
        },
      ],
    }),
  ],
};
