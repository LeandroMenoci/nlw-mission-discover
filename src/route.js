const express = require('express')
const questionController = require('./controllers/questionController')

const route = express.Router() //para iniciar a rota dentro do node

route.get('/', (req, res) => res.render('index', { page: 'enter-room' })) // é utilizado o caminho para o server entender qual tem que renderizar na tela
route.get('/create-pass', (req, res) => res.render('index', { page: 'create-pass' }))
route.get('/room', (req, res) => res.render('room'))

// Formato que o formulario de dentro da modal tem que passar a informação
route.post('/room/:room/:question/:action', questionController.index)

module.exports = route