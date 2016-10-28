const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: ['webpack-dev-server/client?http://localhost:8080', path.join(__dirname, 'src', 'app-client.js')],
	output: {
		path: path.join(__dirname, 'src', 'static', 'js'),
		filename: 'bundle.js',
		publicPath:  '/static/',
	},
	module: {
		loaders: [{
			test: path.join(__dirname, 'src'),
			loader: ['babel-loader'],
			query: {
				cacheDirectory: 'babel_cache',
				presets: ['react', 'es2015']
			}
		}]
	},
	resolve: {
		extensions: ['', '.js']
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.OccurenceOrderPlugin()
	]
}