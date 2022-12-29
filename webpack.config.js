const webpack = require('webpack');

module.exports = {
	entry: {
    	block: './src/js/block.js',
    	dino: './src/js/dino-game.js'
  	},
	output: {
    	filename: '[name].build.js',
    	path: __dirname + '/dist'
  	},
	module: {
		rules: [
			{
				test: /.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				
			},
			{
		        test: /\.(png|jpe?g|gif)$/,
		        use: [
		        	{
		            	loader: 'file-loader',
		            	options: {},
		        	},
		    	],
		    }
		],
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				screw_ie8: true,
				conditionals: true,
				unused: true,
				comparisons: true,
				sequences: true,
				dead_code: true,
				evaluate: true,
				if_return: true,
				join_vars: true
			},
			output: {
				comments: false
	    	}
	  }),
	  new webpack.HashedModuleIdsPlugin()
	]
};