const path = require('path');
const webpack = require('webpack');
const WebpackCleanPlugin = require('webpack-clean-plugin');
const WebpackPluginCopy = require('webpack-plugin-copy');

const PATHS = {
    src: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build'),
    public: path.join(__dirname, 'public')
};

module.exports = {
	entry: './src/index.js',

	output: {
		filename: './js/bundle.js',
		path: path.resolve(__dirname, 'build')
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: 'babel-loader'
			},
			{
	            test: /\.scss$/,
	            use: [
		            {
		                loader: "style-loader" // creates style nodes from JS strings
		            },
		            {
		                loader: "css-loader" // translates CSS into CommonJS
		            },
		            {
		                loader: "sass-loader" // compiles Sass to CSS
		            }
	            ]
        	}
		]
	},

	plugins: [
		new WebpackCleanPlugin({
	      on: "emit",
	      path: ['./build']
	    }),
	    new WebpackPluginCopy([
            { from: PATHS.public, to: PATHS.build },
        ]),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        })
	],

	devServer: {
		inline: true,
		contentBase: path.join(__dirname, "public"),
		compress: true,
		port:3000,
		watchContentBase: true,
		historyApiFallback: true
	},

	devtool: 'eval-source-map',
	resolve: {
    	extensions: ['.js', '.jsx'],
    },
}
