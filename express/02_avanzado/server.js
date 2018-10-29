const app = require('./app'),
c = console.log

app.listen(
	//obtener el puerto dinamico generado
	app.get('port'),
	() => c(`Iniciando express en el puerto ${app.get('port')}`)
)