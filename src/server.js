var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config');

new WebpackDevServer(webpack(config), {
	hot: true,
	historyApiFallback: true
}).listen(8080);