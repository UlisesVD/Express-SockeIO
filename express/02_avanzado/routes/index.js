const express = require('express'),
router = express.Router()

router
.get('/', (req, res, next)=>res.render('index',{title:'Home'}))
.get('/portafolio', (req, res, next)=>res.render('portfolio',{title:'Portafolio'}))
.get('/contacto', (req, res, next)=>res.render('contact',{title:'Contacto'}))


module.exports = router