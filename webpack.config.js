const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const WorkerPlugin = require('worker-plugin')

module.exports = {
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
  },
  plugins: [
    new HTMLPlugin({
      template: path.join(__dirname, 'public/index.html'),
    }),
    new WorkerPlugin()
  ],
}
