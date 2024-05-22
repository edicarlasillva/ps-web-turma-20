// console.log('Hello, JavaScript externo');

// // alert('Sou uma alerta');

// // let -> Let it change

// // tipo de dado string
// let nome = 'João'
// console.log(nome)

// nome = 'Carla'
// console.log(nome)

// // number
// let idade = 30
// console.log(idade)

// let preco = 19.99
// console.log(preco)

// // boolean
// let estaChovendo
// estaChovendo = true
// console.log(estaChovendo)

// // let a = 10
// // let b = a

// // console.log(b)
// // b = 20

// // console.log(a)
// // console.log(b)

// // undefined
// let name
// console.log(name)

// // null
// let age = null
// console.log(age)

// // Saber o tipo de dado armazenado na variável
// console.log(typeof idade, idade)

// // Operadores Aritméticos
// let soma = 3 + 5
// console.log('Soma:', soma)

// let subtracao = 7 - 2
// console.log('Subtracao:', subtracao)

// let multiplicacao = 4 * 6
// console.log('Multiplicacao:', multiplicacao)

// let divisao = 10 / 2
// console.log('Divisao:', divisao)

// let resto = 10 % 3
// console.log('Resto:', resto)

// let exp = 2 ** 3
// console.log('Exp:', exp)

// let incremento = 5
// incremento++
// console.log(incremento)

// let decremento = 5
// decremento--
// console.log(decremento)

// let num1 = 10
// let num2 = 'Carla'
// console.log(num1 + num2) // NaN - Not a number

// let num3 = 10
// let num4 = parseInt('10')
// let num5 = parseFloat('5.2')
// let num = Number('5')
// console.log(num3 + num4)

// console.log(typeof num4)

// let a = 10
// let b = 3

// // a = a + 5
// a += 5

// // b = b - 2
// b -= 2

// console.log(a)
// console.log(b)

// a *= 3
// b /= 4
// console.log(a)
// console.log(b)

// a %= 7
// console.log(a)

// Operadores Relacionais
// let num1 = 5;
// let num2 = 7;

// Maior que
// let maior = num2 > num1
// console.log(maior)

// // Menor
// let menor = num1 < num2
// console.log(menor)

// // Maior ou igual a
// let maiorOuIgual = num1 >= 5
// console.log(maiorOuIgual)

// // Menor ou igual
// let menorOuIgual = num2 <= 7
// console.log(menorOuIgual)

// let igual = num1 === '5'
// console.log('Igual:', igual)

// let diferente = num1 !== 5
// console.log(diferente)

// Estrututura condicional
let chover = false
if (chover) {
  console.log("Não vou ao parque")
}

// entrada
let numero = 11

// processamento
if (numero >= 10) {
  console.log('Número é maior ou igual a 10') // saída
} else {
  console.log('O número NÃO é maior ou igual a 10') // saída
}

// Média Ponderada
// entrada
let nota1 = 7
let nota2 = 8
let nota3 = 9

let peso1 = 2
let peso2 = 3
let peso3 = 5

// processamento
let media = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3)

if (media >= 7) {
  console.log('O aluno passou!') // saída
} else {
  console.log('O aluno foi reprovado!') // saída
}

// Transformar idade em dias
// entrada
let anos = 15;
let meses = 6;
let dias = 15;

// processamento
// quantidade de dias em 1 ano = 365
// quantidade de dias em 1 mês = 30
let idadeEmDias = (anos * 365) + (meses * 30) + dias

// saída
console.log('A idade em dias é: ', idadeEmDias);

// Cálculo Simples
// entrada
let num1 = 5
let num2 = 3

// processamento
let soma = num1 + num2
let subtracao = num1 - num2
let multiplicacao = num1 * num2
let divisao = num1 / num2

// saída
console.log('Soma:', soma)
console.log('Subtração:', subtracao)
console.log('Multiplicação:', multiplicacao)
console.log('Divisão:', divisao)

// Verificador de Idade
let idade = 16

if (idade >= 18) {
  console.log('Você é maior de idade.') // saída
} else {
  console.log('Você é menor de idade') // saída
}

// Verificador de Números Pares ou Ímpares
let n = 8;

if (n % 2 === 0) {
  console.log('O número é par.'); // saída
} else {
  console.log('O número é ímpar.'); // saída
}