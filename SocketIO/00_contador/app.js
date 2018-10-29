/*
	socket.io
	1° Eventos connection y disconnect para el canl vidireccional
	2° puedes crear tus propio eventos
	3° emit() cuando se comunica un mensaje a todos los clientes conectados
	4° broadcast.emit() cuando se comunica un mensaje a todos los clientes
	execto al que lo origina
	5° lo anterior aplica para el servidor y para el cliente
*/
const c = console.log,
http = require('http').createServer(server),
fs = require('fs'),
io = require('socket.io')(http)

let connections = 0

function server(req, res) {
	fs.readFile('index.html', (err, data)=>{
		if (err) {
			res.writeHead(500, {'Content-Type':'text/html'})
			return res.end('<h1>Eror interno del servidor</h1>')
		} else {
			res.writeHead(200, {'Content-Type':'text/html'})
			return res.end(data, 'utf-8')
		}
	})
}

http.listen(3000,c('servidor corriendo desde el localhost 3000'))

io.on('connection',socket=>{
	socket.emit('hello',{message:'Hola mundo con socket.io'})

	socket.on('otro-event', data=>c(data))

	connections++
	c(`Conexiones activas: ${connections}`)

	socket.emit('conect-users',{connections})
	socket.broadcast.emit('conect-users',{connections})

	socket.on('disconnect',()=>{
		connections--
		socket.broadcast.emit('conect-users',{connections})
		c(`Conexiones activas: ${connections}`)
	})
})