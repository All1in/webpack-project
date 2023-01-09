const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = (env, argv) => {
    const entry = {
        index: [
            path.resolve(__dirname, 'src/js/main.js'),
        ]
    };
    const development = argv.mode === 'development';
    const mode = development ? 'development' : 'production';
    const devtool = development ? 'inline-source-map' : false;
    const module = {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    'presets': ['@babel/env'],
                    'plugins': [
                        '@babel/plugin-transform-runtime',
                    ],
                },
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    };
    const output = {
        path: path.resolve(path.join(__dirname, 'dist')),
        publicPath: '/',
        filename: 'main.js',
    };
    const devServer = {
        historyApiFallback: true,
        static: {
            directory: path.resolve(path.join(__dirname, 'src')),
        },
        port: 5877,
        host: 'localhost',
        hot: true,
        open: true,
    };
    const plugins = [
        new CleanWebpackPlugin({
            dry: true,
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(process.cwd(), 'src/index.html'),
            hash: true,
            minify: false,
            publicPath: './',
            DEV: development,
        }),
    ];

    return {
        mode,
        entry,
        output,
        devtool,
        resolve: { extensions: ['*', '.js'] },
        module,
        plugins,
        devServer,
    };
};
