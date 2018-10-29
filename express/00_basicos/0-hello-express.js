const express = require('express'),
app = express()

app
.get('/', (req, res)=>res.end('<h1>Hola mundo desde express.js</h1>')
)
.listen(3000,()=> console.log('inicio en puerto 3000'))