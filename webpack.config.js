const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "development",
  target: ["web", "es5"],
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    filename: "index.js",
    path: path.join(__dirname, "dist"),
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  resolve: {
    fallback: { crypto: false },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
};
