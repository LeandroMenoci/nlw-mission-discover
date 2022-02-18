const express = require('express') // para importar o módulo express
const route = require('./route')
const path = require('path')

const server = express(); // para iniciar o express

server.set('view engine', 'ejs') // para o servidor entender que tem que rodar um arquivo ejs

server.use(express.static('public')) // express usa conteúdo estático e o nome da pasta onde ficará guardado o conteúdo

server.set('views', path.join(__dirname, 'views')) // path pega o caminho da pasta onde está o projeto, join irá juntar, o dirname irá se tornar src (variável global)

server.use(route)

server.listen(3000, () => console.log("RODANDO ")) // para iniciar o server, escolher a porta e podemos deixar uma mensagem no console para certificar que o server foi iniciado

