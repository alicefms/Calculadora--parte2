const express = require('express')

const route = express.Router()

route.get('/', (req, res) => res.render('index'))
route.get('/cadastro', (req, res) => res.render('cadastro'))
route.get('/relatorio', (req, res) => res.render('relatorios'))

module.exports = route