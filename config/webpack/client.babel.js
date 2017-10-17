import webpack from 'webpack'
import path from 'path'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

import pkg, { version } from '../../package.json'

const sourcePath = path.join(__dirname, '../../src')
const staticsPath = path.join(__dirname, '../../build/client')

const generateWebPackConfig = ({
  liveReload = false, devServer = false, devServerPort = 9000, devtool = undefined } = {}) => ({
    context: sourcePath,
    entry: {
      app: liveReload ? [
        'react-hot-loader/patch',
        `webpack-dev-server/client?http://localhost:${devServerPort}`,
        './client/index.livereload.js'
      ] : './client/index.js'
    },
    output: {
      path: staticsPath,
      filename: `[name].${version}.bundle.js`,
      libraryTarget: 'umd',
      publicPath: devServer ? `http://localhost:${devServerPort}/` : '/client/'
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
          plugins: liveReload ? ['react-hot-loader/babel'] : undefined
        } },
        liveReload ? {
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
        } : {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
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
          })
        },
      {
        test: /\.(jpg|png|svg)$/,
        use: [
          'file-loader'
        ]
      }, {
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
    devtool,
    target: 'web',
    devServer: devServer ? {
      port: devServerPort,
      hotOnly: true,
      headers: { 'Access-Control-Allow-Origin': '*' }
    } : undefined
  })

export default generateWebPackConfig()
export { generateWebPackConfig }
