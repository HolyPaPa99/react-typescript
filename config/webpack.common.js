const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        app: './src/index.tsx',
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.(js|mjs|jsx|ts|tsx)$/,
                include: [path.resolve(__dirname,'../src')],
                loader: require.resolve('babel-loader'),
                options: {
                    customize: require.resolve(
                        'babel-preset-react-app/webpack-overrides'
                    ),
                    presets: [
                        [
                            require.resolve('babel-preset-react-app'),
                            {
                                runtime: 'automatic',
                            },
                        ],
                    ],

                    // plugins: [
                    //     isEnvDevelopment &&
                    //     shouldUseReactRefresh &&
                    //     require.resolve('react-refresh/babel'),
                    // ].filter(Boolean),
                    // This is a feature of `babel-loader` for webpack (not Babel itself).
                    // It enables caching results in ./node_modules/.cache/babel-loader/
                    // directory for faster rebuilds.
                    cacheDirectory: true,
                    // See #6846 for context on why cacheCompression is disabled
                    cacheCompression: false,
                    // compact: isEnvProduction,
                },
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Production',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, '../dist'),
        clean: true,
    },
};