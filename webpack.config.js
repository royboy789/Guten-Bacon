

module.exports = {
	entry: './blocks/block.js', // Webpack
	output: {
		path: __dirname + '/blocks',
		filename: 'block.build.js',
	},
	module: {
		loaders: [
			{
				test: /.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
		],
	},
};
