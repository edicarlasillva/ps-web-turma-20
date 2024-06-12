// const nomes = []
// const emails = []
// const telefones = []

// nomes.push('Carla')
// emails.push('carla@gmail.com')
// telefones.push('719564525485')

// const pessoa = {
//   id: 1,
//   primeiroNome: 'Carla',
//   ultimoNome: 'Silva',
//   idade: 36,
//   'tem-filho': true
// }
// console.log(pessoa.id)
// console.log(pessoa.primeiroNome)
// console.log(pessoa['tem-filho'])

// // propriedade dinâmica
// const key = 'primeiroNome'
// console.log(pessoa[key])

// const carro = {}

// carro.marca = 'Toyota'
// carro.modelo = 'Corolla'
// carro.ano = 2022
// carro.cor ='Preto'

// console.log(carro)

// const titulo = 'Roube como um artista'
// const autor = 'Austin Kleon'
// const publicacao = 2012

// const livro = {
//   titulo,
//   autor,
//   publicacao
// }

// delete livro.titulo

// console.log('Delete:', livro)

// livro.titulo = 'Mostre o seu trabalho'
// livro.editora = 'Tal'

// console.log(livro)

// // livro = [] // Assignment to constant variable.

// const linguagem = {
//   nome: 'JavaScript',
//   ano: 1995
// }

// console.log(linguagem['no' + 'me'])

// // Criar objeto aluno
// const aluno = {
//   nome: 'João',
//   idade: 20,
//   curso: 'Engenharia'
// }
// // Colocar nome, idade e curso
// // Acessar a propriedade nome
// console.log(aluno.nome)
// // Adicionar a propriedade nota e colocar um valor
// aluno.nota = 8.5
// console.log(aluno)
// // Alterar a propriedade curso
// aluno.curso = 'PS WEB'
// console.log(aluno)
// // Acessar a idade do aluno e verificar se é maior ou menor que 18 anos. 
// if (aluno.idade > 18) {
//   console.log('O aluno é maior')
// } else {
//   console.log('O aluno é menor que 18 anos')
// }

// const ponto1 = {x: 0, y: 0}
// const ponto2 = {x: 0, y: 0}

// console.log(ponto1 === ponto2) // false

// let ponto1 = {x: 0, y: 0}
// // let ponto2 = ponto1
// let ponto2 = {x: 0, y: 5}

// // ponto2.x = 10
// console.log(ponto1.x)
// console.log(ponto2.x)

// console.log('Aqui', ponto1.x === ponto2.x)

// const livro = {
//   titulo: 'Crônicas de gelo e fogo',
//   autor: 'George R. R. Martin',
//   paginas: 400,
//   idioma: 'Português',
//   estaDisponivel: true
// }

// for (const key in livro) {
//   console.log(key)
// }

// const pessoa = {
//   codigo: 1,
//   nome: 'Carla',
//   idade: 17
// }

// for (const key in pessoa) {
//   console.log(pessoa[key])
// }

// const livro = {
//   titulo: 'Crônicas de gelo e fogo',
//   autor: 'George R. R. Martin',
//   paginas: 400,
//   idioma: 'Português',
//   estaDisponivel: true
// }

// const livro2 = {}


// for (const key in livro) {
//   livro2[key] = livro[key]
// }

// console.log(livro2)

// const carros = []

// const carro1 = {
//   marca: 'Toyota', 
//   modelo: 'Corolla', 
//   ano: 2020, 
//   cor: 'Prata'
// }

// const carro2 = {
//   marca: 'Honda', 
//   modelo: 'Civic', 
//   ano: 2020, 
//   cor: 'Preto'
// }

// carros.push(carro1, carro2)

// console.log(carros)

// // Marca: Toyota, modelo: Corolla, ano: 2020, cor: Preto

// for (const carro of carros) {
//   console.log(`Marca: ${carro.marca}, modelo: ${carro.modelo}, ano: ${carro.ano}, cor: ${carro.cor} `)
// }

const pessoas = []

let continuarCadastrando = true

while (continuarCadastrando) {
  const nome = prompt('Informe o nome')
  const idade = prompt('Informe a idade')
  const cidade = prompt('Informe a cidade')

  const pessoa = {
    nome,
    idade,
    cidade
  }

  pessoas.push(pessoa)

  continuarCadastrando = confirm('Deseja continuar cadastrando?')
}

console.log('Pessoas Cadastradas')
for (const pessoa of pessoas) {
  console.log(`Nome: ${pessoa.nome}`)
  console.log(`Idade: ${pessoa.idade}`)
  console.log(`Cidade: ${pessoa.cidade}`)
  console.log('---------------')
}
