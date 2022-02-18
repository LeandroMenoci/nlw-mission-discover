const express = require('express')

const route = express.Router() //para iniciar a rota dentro do node

route.get('/', (req, res) => res.render('index')) // é utilizado o caminho para o server entender qual tem que renderizar na tela

module.exports = route