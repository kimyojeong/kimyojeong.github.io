const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  // webpack folder's entry js - excluded from jekll's build process.
  entry: './webpack/entry.js',
  output: {
    // we're going to put the generated file in the assets folder so jekyll will grab it.
    path: path.resolve(__dirname, 'assets'),
    filename: 'javascripts/bundle.js'
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx'],
    modules: ['node_modules'],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // set to true if you want JS source maps
      }),
    ],
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1, // https://webpack.js.org/loaders/postcss-loader/
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: () => [
                  require('cssnano')(), // https://cssnano.co/
                ],
              }
            },
          },
          {
            loader: 'sass-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        }
      }
    ]
  }
};
