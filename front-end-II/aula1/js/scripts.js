// capturar os elementos
const contador = document.getElementById('contador')
const status = document.getElementById('status')
const botao = document.querySelector('button')

let numeroPessoas = 0
const numeroMinimo = 5

contador.innerText = numeroPessoas

function registrarPresenca() {
  numeroPessoas++
  contador.innerText = numeroPessoas

  if (numeroPessoas >= numeroMinimo) {
    status.innerText = 'Pode começar'
    status.classList.remove('aguardando')
    status.classList.add('pode-comecar')
  } else {
    status.innerText = 'Aguardando por mais presenças'
    status.classList.remove('pode-comecar')
    status.classList.add('aguardando')
  }
}

// botao.onclick = () => registrarPresenca()

