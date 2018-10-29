const express = require('express'),
app = express()

app
.get('/', (req, res)=>res.sendFile(`${__dirname}/index.html`)
).listen(3000,()=> console.log('inicio en puerto 3000'))