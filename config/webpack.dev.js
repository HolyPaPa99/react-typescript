const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {//dev server 默认端口8080
        static: [
            {
                directory: path.join(__dirname, '../public'),
                // publicPath: '/assets'
            }
        ],
        compress: true,
        port: 9000,
        open: false,
        client: {
            logging: 'log',
            overlay: true,
            progress: true,
        },
    },
    optimization: {
        runtimeChunk: 'single',
    },
});