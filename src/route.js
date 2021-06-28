const express = require('express')
const anuncioController = require('./controller/anuncioController')

const route = express.Router()

route.get('/', (req, res) => res.render('index'))
route.get('/cadastro', (req, res) => res.render('cadastro'))
route.get('/relatorio', (req, res) => res.render('relatorios'))

route.post('/cadastro/:nomeanuncio/:cliente/:datainicio/:datafim/:investimentod', anuncioController.criar)

module.exports = route


