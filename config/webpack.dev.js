const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {//dev server 默认端口8080
        contentBase: path.resolve(__dirname, '../dist')
    },
    optimization: {
        runtimeChunk: 'single',
    },
});