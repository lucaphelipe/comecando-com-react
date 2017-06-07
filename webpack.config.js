module.exports = {
	entry: "./app/App.js",
	output: {
		filename: "plublic/bundle.js"
	},
	module:{
		loaders:[
			{
				test: /\.js$/, //Lê todos os arquivos com extenção .js
				exclude: /node_modules/, //Exclui a pasta nome_modules
				loader: 'babel-loader', //Usar o babel
				query: {
					presets: ['react']
				}
			}
		]
	}
}
