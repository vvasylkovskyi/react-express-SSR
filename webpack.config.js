const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development", // Sets the mode to development (as opposed to production)
  entry: "./src/index.js", // Points to our app's entry file
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
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
            plugins: ["@babel/plugin-transform-runtime"], // This plugin enables the re-use of Babel's injected helper code to save on codesize.
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Generates an HTML file for your application
      title: "Custom Webpack App",
      template: "./src/index.html", // The source from which the HTML is created
    }),
  ],
};
