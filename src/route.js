const express = require('express')

const route = express.Router() //para iniciar a rota dentro do node

route.get('/', (req, res) => res.render('index')) // é utilizado o caminho para o server entender qual tem que renderizar na tela
route.get('/room', (req, res) => res.render('room'))
route.get('/create-pass', (req, res) => res.render('create-pass'))

module.exports = route