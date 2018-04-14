const ExtractTextPlugin = require('extract-text-webpack-plugin');

module {
  rules: [
    {
      use: ExtractTextPlugin.extract({
        use: ['css-loader', 'less-loader']
      }),
      test: /\.less$/
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
    },
  ]
},
plugins: [
  new ExtractTextPlugin({
    filename: '[name].[contenthash].css'
  }),
]

