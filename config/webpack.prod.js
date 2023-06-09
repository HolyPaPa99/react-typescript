const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        runtimeChunk: 'single',
    },
});