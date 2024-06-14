// function saudacao() {
//   console.log('Olá, seja bem-vindo!')
// }

// saudacao()

// function bemVindo(nome = 'Amanda') {
//   console.log(`Olá, ${nome}!`)
// }

// bemVindo('Carla')

// function somarNumeros(a, b) {
//   const soma = a + b
//   return soma
// }

// // const soma = somarNumeros(7, 2)
// const numero1 = 7
// const numero2 = 2
// // console.log(somarNumeros(7, 2))
// console.log(somarNumeros(numero1, numero2))

// function calcularIdade(anoNascimento, anoAtual) {
//   return anoAtual - anoNascimento
// }

// console.log(calcularIdade(1988, 2024))

// Função para calcular média e retornar o valor
// function calcularMedia(nota1, nota2) {
//   const media = (nota1 + nota2) / 2
//   console.log(`Sua média é: ${media}`)

//   return media
// }

// const media = calcularMedia(8.5, 10)
// console.log(media)


// const nome = prompt('Qual é o seu nome?')
// console.log('Hello, métodos!')
// document.write('Hello!')

// const nomeDeUsuario = 'carla123'

// function saudarUsuario() {
//   console.log(`Olá: ${nomeDeUsuario}!`)
// }

// saudarUsuario()

// function calcularTaxa(renda) {
//   const taxaImposto = 0.2

//   return renda * taxaImposto
// }

// const minhaRenda = 3000
// const valorImposto = calcularTaxa(minhaRenda)

// console.log(`Imposto a pagar: ${valorImposto}`)
// console.log(taxaImposto) // taxaImposto is not defined

// let contador = 0

// function incrementar() {
//   contador++
// }

// function mostrar() {
//   console.log(`Contador: ${contador}`)
// }

// incrementar()
// incrementar()
// mostrar()

// function calcularArea(raio) {
//   const pi = Math.PI
//   const area = pi * raio * raio
//   // const area = pi * raio ** 2
//   // const area = pi * Math.pow(raio, 2)

//   return area
// }

// const raioCirculo = 5
// const areaCalculada = calcularArea(raioCirculo)
// console.log(`A área do círculo é: ${areaCalculada.toFixed(2)}`)

// console.log(pi) // pi is not defined

// if (true) {
//   const idade = 25
// }

// console.log(idade) // idade is not defined

// Criar uma função que recebe um array de notas e calcula a média, se acima ou igual a 7, aprovado. Abaixo de 7, reprovado. 
// function calcularMedia(notas) {
//   let soma = 0

//   for (const nota of notas) {
//     soma += nota // soma = soma + nota
//   }

//   const media = soma / notas.length

//   if (media >= 7) {
//     return `Aprovado! Média: ${media}`
//   } else {
//     return `Reprovado! Média: ${media}`
//   }
// }

// const notasAlunos = [0, 10, 10, 10, 0]
// const resultado = calcularMedia(notasAlunos)
// console.log(resultado)

// const numeros = [1, 2, 3, 4, 5]

// numeros.forEach(function(numero) {
//   console.log(numero * 2)
// })

// const numeros = [1, 2, 3, 4, 5]

// const numerosRetornados = numeros.map(function(numero) {
//   return numero * 2
// })

// console.log(numerosRetornados)

// const frutas = ['Maçã', 'Banana', 'Laranja', 'Uva']

// frutas.forEach(function(fruta, indice, array) {
//   console.log(`${indice} Eu gosto de ${fruta} ${array}`)
// })


// const idades = [18, 25, 30, 16, 22]

// const maioresDeIdade = idades.filter(function(idade) {
//   return idade >= 18
// })

// console.log(maioresDeIdade)

// const frameworks = [
//   {
//     nome: 'Vue.js',
//     contribuidores: 1560
//   },
//   {
//     nome: 'React',
//     contribuidores: 2000
//   },
//   {
//     nome: 'Angular.js',
//     contribuidores: 500
//   }
// ]

// const resultado = frameworks.filter(function(framework) {
//   return framework.contribuidores <= 1000
// })

// console.log(resultado)

// const numeros = [10, 20, 30, 40, 50]

// const numeroMaiorQue25 = numeros.find(function(numero) {
//   return numero > 25
// })

// console.log(numeroMaiorQue25)

// const frutas = ['Maçã', 'Banana', 'Uva', 'Laranja', 'Uva']

// const indice = frutas.findIndex(function(fruta) {
//   return fruta === 'Uva'
// })

// console.log(indice)


const pessoas = [
  {
    nome: 'João',
    sexo: 'M',
    salario: 2500
  },
  {
    nome: 'Carla',
    sexo: 'F',
    salario: 3500
  },
  {
    nome: 'Pedro',
    sexo: 'M',
    salario: 1800
  },
  {
    nome: 'Ana',
    sexo: 'F',
    salario: 2800
  }
]

const indice = pessoas.find(function(pessoa) {
  return pessoa.sexo === 'M'
})

console.log(indice)