const express = require('express'),
app = express()

app
.get('/', (req, res)=>{
	res.send('<h1>Hola mundo</h1>')
})
.get('/escuela-digital', (req, res)=>{
	//res.send('<h1>Hola escuela digital</h1>')
	//301 permanente
	res.redirect(301, 'https://ed.team')
})
.get('/json', (req, res)=>{
	res.json({
		name:'juan',
		age:20,
		twitter:'@ulises'
	})
})
.get('/render', (req, res)=>{
	//para templates como pug
	res.render(`${__dirname}/index.html`)
})
.listen(3000, ()=>console.log('Iniciando express en puerto 3000'))