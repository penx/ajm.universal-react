import webpack from 'webpack'
import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

import pkg, { version } from '../../package.json'

const sourcePath = path.join(__dirname, '../../src')
const staticsPath = path.join(__dirname, '../../build/client')
const liveReloadPort = 9000

const defaultConfig = {
  context: sourcePath,
  entry: {
    app: [
     'react-hot-loader/patch',
     `webpack-dev-server/client?http://localhost:${liveReloadPort}`,
     './client/index.livereload.js'
   ] // TODO: or app: './client/index.js' for prod
  },
  output: {
    path: staticsPath,
    filename: `[name].${version}.bundle.js`,
    libraryTarget: 'umd',
    publicPath: `http://localhost:${liveReloadPort}/` // TODO: or '/client/' for prod
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: [
          ['es2015', { modules: false }],
          'stage-1',
          'react'
        ],
        plugins: ['react-hot-loader/babel']
      }},
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: pkg.config.cssClassPattern
            }
          },
          'postcss-loader'
        ]
      },
      // TODO: prod CSS
      // {
      //   test: /\.css$/,
      //   loader: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: [
      //       {
      //         loader: 'css-loader',
      //         options: {
      //           modules: true,
      //           importLoaders: 1,
      //           localIdentName: pkg.config.cssClassPattern
      //         }
      //       },
      //       'postcss-loader'
      //     ]
      //   })
      // },
      {
        test: /\.(jpg|png|svg)$/,
        use: [
          'file-loader'
        ]
      },{
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader'
      }

    ],
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, '../../node_modules'),
      sourcePath
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      chunks: ['app'],
      minChunks(module) {
        return module.context
          && module.context.indexOf('node_modules') !== -1
      }
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({ filename: `[name].${version}.bundle.css`, allChunks: true, ignoreOrder: true }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'cheap-module-eval-source-map',
  target: 'web',
  devServer: {
    port: liveReloadPort,
    hotOnly: true,
    headers: { 'Access-Control-Allow-Origin': '*' }
  }
}

export default defaultConfig
