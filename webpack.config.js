let webpack = require('webpack')
let path = require('path')
 
module.exports = {
  entry: './frontend/main.js',
  output: {
    path: __dirname + '/public/js',
    filename: 'bundle.js',
    publicPath: './public/js'
  },
  resolve: {
  	alias: {
  		'vue$': 'vue/dist/vue.common.js'
  	}
  },
  module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            postLoaders: {
              html: 'babel-loader'
            },
            excludedPreLoaders: /(eslint-loader)/
          }
        }
      ]
    }
}