const express = require('express'),
app = express()

app
.get('/', (req, res)=>res.end('<h1>Hola mundo desde express.js:)</h1>'))
.get('/users', (req, res)=>{
	res.set({'content-type':'text/html; charset=utf-8'})
	.end('<h1>Hola estas en la sección de usuarios</h1>')
})
.get('/users/:id-:name-:edad',  (req, res)=>{
	//pra url's /users/19-ulises-21
	res.end(`
		<h1>Hola ${req.params.name}, bienvenid@ a expressjs :)</h1>
		<p>Tu id es <b>${req.params.id}</b></p>
		<p>Tu edad es <b>${req.params.edad}</b> años</p>
		`)

})
.get('/search',  (req, res)=>{
	res.end(`
		<h1>bienvenid@ a expressjs :)</h1>
		<p>Los resultados de la busqueda:<mark>${req.query.s}</mark></p>s
		`)
})
.listen(3000,()=> console.log('inicio en puerto 3000'))