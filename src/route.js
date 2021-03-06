const express = require('express')
const anuncioController = require('./controller/anuncioController')

const route = express.Router()

route.get('/', (req, res) => res.render('index'))
route.get('/cadastro', (req, res) => res.render('cadastro'))
route.get('/relatorio', anuncioController.buscar)

route.post('/novocadastro', anuncioController.criar)

route.post('/relatorio-filtercliente', anuncioController.filtrarCliente)
route.post('/relatorio-filterdata', anuncioController.filtrarData)


module.exports = route


