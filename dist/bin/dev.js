"use strict";
var webpack = require('webpack');
var _a = require('../webpack.config'), webpackClientConfig = _a[0], webpackServerConfig = _a[1];
var nodemon = require('nodemon');
var path = require('path');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var express = require('express');
var hmrServer = express();
var clientCompiler = webpack(webpackClientConfig);
hmrServer.use(webpackDevMiddleware(clientCompiler, {
    publicPath: webpackClientConfig.output.publicPath,
    serverSideRender: true,
    noInfo: true,
    watchOptions: {
        ignore: /dist/,
    },
    writeToDisk: true,
    stats: 'errors-only',
}));
hmrServer.use(webpackHotMiddleware(clientCompiler, {
    path: '/static/__webpack_hmr',
}));
hmrServer.listen(3001, function () {
    console.log('HMR server successfully started');
});
var compiler = webpack(webpackServerConfig);
compiler.run(function (err) {
    if (err) {
        console.log('Compilation failed: ', err);
    }
    compiler.watch({}, function (err) {
        if (err) {
            console.log('Compilation failed: ', err);
        }
        console.log('Compilation was successfully');
    });
    nodemon({
        script: path.resolve(__dirname, '../dist/server/server.js'),
        watch: [
            path.resolve(__dirname, '../dist/server'),
            path.resolve(__dirname, '../dist/client'),
        ],
        delay: 2000
    });
});
//# sourceMappingURL=dev.js.map