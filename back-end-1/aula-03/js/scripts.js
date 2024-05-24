// let nome
// nome = 'Carla'

// const idade = 30
// // idade = 24

// const age = 35
// // age = 35 -> não pode 

// /* 
// Comentário 
// múltiplas
// linhas
// */


// let peso = 66
// // Não posso redeclarar a mesma variável usando let nem const
// // let peso = 85

// var altura = '1.72'
// // var altura = '1.73'
// altura = '1.73'

// let varA = 'A'
// let varB = 'B'
// let varC = 'C'

// const temp = varA
// varA = varB
// varB = varC
// varC = temp

// console.log(varA, varB, varC)

// const num1 = 10
// const num2 = 5
// const operador = '*'
// let resultado = 0

// if (operador === '+') {
//   resultado = num1 + num2
// } else if (operador === '-') {
//   resultado = num1 - num2
// } else if (operador === '*') {
//   resultado = num1 * num2
// } else if (operador === '/') {
//   resultado = num1 / num2
// } else {
//   console.log('Operador inválido.')
// }

// console.log('Resultado:', resultado)

const x = 9
// if (x >= 10 && x <= 25) {
//   console.log('Está no intervalo')
// } else {
//   console.log('Fora do interválo')
// }

// if (x < 10 || x > 25) {
//   console.log('Fora do intervalo')
// } else {
//   console.log('Dentro do intervalo')
// }

// const chover = true
// if (!chover) {
//   console.log('')
// } else {
//   console.log('')
// }

// prompt()
// entrada
// let nota1 = prompt('Digite a primeira nota')
// let nota2 = prompt('Digite a segunda nota')
// let nota3 = prompt('Digite a terceira nota')

// nota1 = Number(nota1)
// nota2 = Number(nota2)
// nota3 = Number(nota3)

// // processamento
// const media = (nota1 + nota2 + nota3) / 3

// // saída
// // document.write('A média das notas:', media)
// document.write(`A média das notas: ${media}`)

let diaDaSemana = 3
let nomeDia

switch (diaDaSemana) {
  case 1:
    nomeDia = 'Domingo'
    break
  case 2:
    nomeDia = 'Segunda'
    break
  case 3:
    nomeDia = 'Terça'
    break
  default:
    nomeDia = 'Dia inválido'
    break
}

document.write(`O dia da semana é ${nomeDia}`)

let numero = 6

switch (true) {
  case numero > 5:
    console.log('O número é maior que 5')
    break
  case numero === 5:
    console.log('O número é igual que 5')
    break
  default:
    console.log('Número é menor do que 5')
    break
}

// Operador ternário
// condicao ? valor : valor2

const idade = 16
const status = (idade >= 18) ? 'Maior de idade' : 'Menor de idade'

console.log(`A pessoa é ${status}`)

// Mais de uma condição no ternário
// condicao ? valor1 : condicao2 ? valor2 : valor3

const preco = 10.5686555
console.log(preco.toFixed(2))

const anoAtual = new Date().getMonth()
console.log(anoAtual + 1)