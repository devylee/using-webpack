var path = require('path');
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
  context: path.resolve(__dirname, 'static/'),
  entry: {
    'vendor': ['jquery'],
    'app': [
      path.resolve(__dirname, 'static/js/main.js'),
      path.resolve(__dirname, 'static/css/app.css')
    ],
    'html': path.resolve(__dirname, 'static/sample.html')
  },
  output: {
    filename: path.posix.join('js', '[name].bundle.js'),
    path: path.resolve(__dirname, 'dist/static/'),
    publicPath: '/'
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
          publicPath: '../'
        })
      },
      {
        test: /\.(png|gif|jpe?g)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]'
        }
      },
      {
        test: /\.html?$/,
        use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
          {
            loader: 'extract-loader',
          },
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: path.posix.join('css', '[name].bundle.css')
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity,
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'static/'),
    publicPath: '/'
  }
}

module.exports = config;