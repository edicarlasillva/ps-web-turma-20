// Questão 1

// for (let numero = 0; numero <= 10; numero++) {
//   console.log(numero)
// }

// let numero = 0

// while (numero <= 10) {
//   console.log(numero)
//   numero++
// }

// let numero = 0

// do {
//   console.log(numero)
//   numero++
// } while (numero <= 10)

// const numero = parseInt(prompt('Digite um número inteiro positivo.'))
// let soma = 0

// for (let i = 1; i < numero; i++) {
//   // soma = soma + 1
//   soma += i
// }

// const media = soma / numero
// console.log(media)

// Questão 2
let numero;
do {
  numero = Number(prompt('Digite um número inteiro positivo'));
} while (isNaN(numero) || numero <= 0 || !Number.isInteger(numero));

let pares = '';
let impares = '';

for (let i = 1; i <= numero; i++) {
  if (i % 2 === 0) {
    pares += `${i}, `;
  } else {
    impares += `${i}, `;
  }
}

console.log(`Números pares: ${pares}`)
console.log(`Números ímpares: ${impares}`)

// let numero

// do {
//   numero = Number(prompt('Digite um número inteiro positivo'))
// } while (isNaN(numero) || numero <= 0 || !Number.isInteger(numero))

// for (let i = 1; i <= numero; i++) {
//   if (i % 2 === 0) {
//     console.log(`${i} é par`)
//   } else {
//     console.log(`${i} é ímpar`)
//   }
// }

// Questão 3

// let numero
// let fatorial = 1

// do {
//   numero = Number(prompt('Digite um número inteiro positivo'))
// } while (isNaN(numero) || numero <= 0 || !Number.isInteger(numero))

// for (let i = 1; i <= numero; i++) {
//   // fatorial = fatorial * i
//   fatorial *= i
// }

// console.log(`O fatorial de ${numero} é ${fatorial}`)

// const nome = 'Carla'
// console.log(nome)

// if (true) {
//   var carro = 'Fusca'
// }

// console.log(carro) // vazou o escopo de bloco

// const mes = 'Janeiro'
// mes = 'Setembro' //Assignment to constant variable

// const data = {
//   dia: 20,
//   mes: 'Setembro',
//   ano: 2023
// }

// data.ano = 2024

