const ExtractTextPlugin = require('extract-text-webpack-plugin');

module {
  rules: [
    {
      use: ExtractTextPlugin.extract({
        use: ['css-loader', 'less-loader']
      }),
      test: /\.less$/
    },
  ]
},
plugins: [
  new ExtractTextPlugin({
    filename: '[name].[contenthash].css'
  }),
]

