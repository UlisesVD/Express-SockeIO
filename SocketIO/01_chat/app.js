const c = console.log,
express = require('express'),
app = express(),
http = require('http').createServer(app),
io = require('socket.io')(http)
port = process.env.PORT || 3000,
publicDir = express.static(`${__dirname}/public`)

app
.use(publicDir)
.get('/',(req,res)=>res.sendFile(`${publicDir}/index.html`))

http.listen(port, ()=> c(`iniciando chat en local:${port}`))

io.on('connection',socket=>{
	socket.broadcast.emit('new-user',{message:'Nuevo usuario a entrado'})

	socket.on('new-message', message=>io.emit('user-message',message))

	socket.on('disconnect',()=>{
		let message = 'Ha salido un usuario del chat'
		c(message)
		socket.broadcast.emit('bye-user',{message})
	})
})