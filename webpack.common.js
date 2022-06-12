const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
   entry: "./src/index.js",
   output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "dist"),
      clean: true
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: "src/index.html",
         favicon: "src/favicon.ico"
      })
   ],
   optimization: {
      moduleIds: "deterministic",
      runtimeChunk: "single",
      splitChunks: {
         cacheGroups: {
            vendor: {
               test: /[\\/]node_modules[\\/]/,
               name: "vendors",
               chunks: "all"
            }
         }
      }
   },
   module: {
      rules: [
         {
            test: /\.html$/,
            loader: "html-loader"
         },
         {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource"
         }
      ]
   }
};
