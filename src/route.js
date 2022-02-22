const express = require('express')
const questionController = require('./controllers/questionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router() //para iniciar a rota dentro do node

route.get('/', (req, res) => res.render('index', { page: 'enter-room' })) // é utilizado o caminho para o server entender qual tem que renderizar na tela
route.get('/create-pass', (req, res) => res.render('index', { page: 'create-pass' }))

route.get('/room/:room', RoomController.open)
route.post('/create-room', RoomController.create)

// Formato que o formulario de dentro da modal tem que passar a informação
route.post('/question/:room/:question/:action', questionController.index)
route.post('/question/create/:room', questionController.create)

module.exports = route