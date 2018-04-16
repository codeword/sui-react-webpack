const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  resolve: {
    alias: {
      '../../theme.config$': path.join(__dirname, 'mySemanticTheme/theme.config')
    }
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.svg$/,
        use: 'file-loader?name=[name].[ext]?[hash]'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: 'file-loader'
      },
      {
        test: /\.otf(\?.*)?$/,
        use: 'file-loader?name=/fonts/[name].[ext]&mimetype=application/font-otf'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css'
    }),
  ]
}
