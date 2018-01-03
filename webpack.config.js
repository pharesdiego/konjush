const path = require('path');

const docs = {
	entry: path.resolve(__dirname, 'index.js'),

	output: {

		path: path.resolve(__dirname, 'docs'),

		filename: 'bundle.js'
	},

	module: {

		loaders: [

			{
				test: /\.jsx?$/,
				exclude:/node_modules/,
				loader: 'babel-loader',
				query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', "transform-es2015-destructuring", "transform-object-rest-spread", 'transform-decorators-legacy', 'transform-class-properties'],
        }
			},

			{
				test:/\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			},

			{

				test:/\.css/,
				loader: 'style-loader!css-loader'
			},

			{ 
        test: /\.png$/, 
        loader: "url-loader?limit=100000" 
      },

      { 
        test: /\.jpg$/, 
        loader: "file-loader" 
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=public/fonts/[name].[ext]'
      }
		]

	}
}
module.exports = [dist, docs]