"use strict";
// const { read } = require('fs');
var path = require('path');
var nodeExternals = require('webpack-node-externals');
var NODE_ENV = process.env.NODE_ENV;
module.exports = {
    target: 'node',
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, '../src/server/server.js'),
    output: {
        path: path.resolve(__dirname, '../dist/server'),
        filename: 'server.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: ['ts-loader']
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                            },
                            onlyLocals: true,
                        }
                    },
                    'less-loader',
                ]
            }
        ]
    },
    optimization: {
        minimize: false,
    }
};
//# sourceMappingURL=webpack.server.config.js.map