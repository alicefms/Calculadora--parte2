const express = require('express')
const anuncioController = require('./controller/anuncioController')

const route = express.Router()

route.get('/', (req, res) => res.render('index'))
route.get('/cadastro', (req, res) => res.render('cadastro'))
route.get('/relatorio', anuncioController.buscar)


route.post('/relatorio-filter', anuncioController.filtrar)


route.post('/novocadastro', anuncioController.criar)

module.exports = route


