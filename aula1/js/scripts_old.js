window.onload = () => {
  // setTimeout(() => console.log('Temporizador executado'), 2000)

const primeiroAluno = document.querySelector('.aluno')
console.log(primeiroAluno)

const todosAlunos = document.querySelectorAll('.aluno')
console.log(todosAlunos)

// array-like
const alunos = document.getElementsByClassName('aluno')
console.log(alunos)

// array de verdade
const elements = Array.from(alunos)

elements.map((element) => {
  console.log(element)
})

const aluno1 = document.getElementById('aluno-1')
console.log(aluno1)

const itensLista = document.getElementsByTagName('li')
console.log(itensLista)

const idDoAluno = aluno1.getAttribute('id')
console.log(idDoAluno)

const chamadaBotao = document.getElementById('chamada')
const adicionaAtributo = chamadaBotao.setAttribute('disabled', 'disabled')

console.log(aluno1.innerHTML)

aluno1.innerHTML = '<strong>Juliana</strong>'

aluno1.innerText = 'Marcelo'

aluno1.classList.add('ativo')
aluno1.classList.remove('aluno')
aluno1.classList.toggle('aluno')
console.log(aluno1.classList.contains('ativo'))
aluno1.classList.replace('ativo', 'inativo')
console.log(aluno1.classList)

console.log(location.href)

const listaPresenca = document.getElementById('lista-presenca')
const novoAluno = document.createElement('li')

novoAluno.classList.add('aluno')

novoAluno.innerText = 'Carlos'

listaPresenca.appendChild(novoAluno)

const aluno2 = document.getElementById('aluno-2')
listaPresenca.removeChild(aluno2)

console.log(listaPresenca.parentElement)
console.log(listaPresenca.previousElementSibling)
console.log(listaPresenca.nextElementSibling)

const element = document.getElementById('element')
element.style.backgroundColor = 'green'
element.style.padding = '5px'
element.style.width = '50px'
element.style.height = '50px'
}