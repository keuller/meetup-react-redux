var path = require('path')
  , webpack = require('webpack')
  , ExtractTextPlugin = require('extract-text-webpack-plugin')
  , BrowserSyncPlugin = require('browser-sync-webpack-plugin')

var extractMDL = new ExtractTextPlugin('mdl.css')
  , extractAPP = new ExtractTextPlugin('login.css')

module.exports = {
    entry: {
        bundler: path.join(__dirname, 'src/index.js'),
        vendor: ['vue', 'redux']
    },
    
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    
    resolve: {
        extensions: ['', '.js', '.vue'],
        modulesDirectories: ['src', 'node_modules']
    },
    
    node: {
        fs: 'empty'
    },
    
    module: {
        loaders: [
            { 
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.vue$/,
                loaders: ['vue-loader'],
                exclude: /node_modules/,
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
            'Vue': 'vue'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 3000,
            server: { baseDir: [__dirname] }
        }, { reload: true }),
        new webpack.NoErrorsPlugin()
    ],
    
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    }
}
