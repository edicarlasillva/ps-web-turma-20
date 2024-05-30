// const numeroAleatorio = Math.floor(Math.random() * 10) + 1
// let tentativas = 0
// // let acertou = false

// while (true) {
//   const palpite = parseInt(prompt("Adivinhe o número entre 1 e 10."))
//   tentativas++

//   if (palpite === numeroAleatorio) {
//     console.log(`Parabéns! Você acertou em ${tentativas} vezes.`)
//     // acertou = true
//     break
//   } else {
//     console.log('Tente novamente.')
//   }
// }

// let numero = parseInt(prompt('Digite um número interiro positivo'))
// let contador = 1
// let resultado = ''

// do {
//   resultado += contador + ' '
//   // resultado = resultado + contador + ' '
//   contador++
// } while (contador <= numero)

// console.log(`${resultado} Acabou!`)

// let count = 0

// for (;;) {
//   console.log(count)
//   count++

//   if (count >= 5) {
//     break
//   }
// }

let numero
do {
  numero = parseInt(prompt('Digite um número.'))
} while (isNaN(numero))

for (let i = 1; i <= 10; i++) {
  let resultado = numero * i
  console.log(`${numero} x ${i} = ${resultado}`)
}
