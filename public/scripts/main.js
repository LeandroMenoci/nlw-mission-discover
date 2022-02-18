import Modal from './modal.js'

const modal = Modal()

// Pegar todos os botões com existe com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')
// Pegar quando o marcar como lido for clicado
checkButtons.forEach(button => {
  // adicionar a escuta
  button.addEventListener('click', event => {
    // Abrir o modal
    modal.open()
  })
})

const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
  button.addEventListener('click', event => {
    modal.open()
  })
})


