const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "development", // Sets the mode to development (as opposed to production)
  entry: "./server/index.js",
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.resolve("server-dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/, // This regex will match .js files
        exclude: /node_modules/, // It's recommended to exclude the node_modules directory
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // Presets used for transpiling
          },
        },
      },
    ],
  },
};
