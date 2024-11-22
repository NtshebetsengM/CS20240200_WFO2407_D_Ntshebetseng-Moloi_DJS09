module.exports = {
  mode: 'development',  // You can set this to 'production' when you're ready to deploy
  output: {
    filename: "[name].pack.js"
  },
  entry: {
    index: "./index"
  },
  resolve: {
    extensions: [
      ".ts",
      ".js",
      ".json"
    ]
  },
  module: {
    rules: [
      {
        use: {
          loader: "ts-loader"
        },
        exclude: /node_modules/,
        test: /\.ts$/
      }
    ]
  }
};
