var path = require('path')
  , webpack = require('webpack')
  , ExtractTextPlugin = require('extract-text-webpack-plugin')

var extractMDL = new ExtractTextPlugin('mdl.css')
  , extractAPP = new ExtractTextPlugin('login.css')
  
module.exports = {
    entry: {
        bundler: path.join(__dirname, 'src/index.jsx'),
        vendor: ['react', 'react-dom', 'redux', 'react-redux']
    },
    
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    
    resolve: {
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ['src', 'node_modules']
    },
    
    node: {
        fs: 'empty'
    },
    
    module: {
        loaders: [
            { 
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }, {
                test: /\.css/,
                loader: extractAPP.extract(['css']),
                exclude: /node_modules/
            }, {
                test: /\.scss$/,
                loader: extractMDL.extract(['css', 'sass'])
            }
        ]
    },
    
    plugins: [
        extractAPP,
        extractMDL,
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.ProvidePlugin({
            'React': 'react'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.NoErrorsPlugin()
    ]
}
