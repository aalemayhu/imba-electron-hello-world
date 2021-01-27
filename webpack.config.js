let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.imba$/,
        loader: 'imba/loader',
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      }
    ],
  },
  resolve: {
    extensions: [".imba", ".js", ".json"]
  },
  entry: ["./src/app.imba"],
  output: {  path: __dirname + '/dist', filename: "app.js" },
  plugins: [
    new ExtractTextPlugin('app.css')
  ]
}
