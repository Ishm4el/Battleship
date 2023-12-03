const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './src/index.js',
	mode: "development",
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/template.html"
		}),
	],
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};
