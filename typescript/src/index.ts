// console.log('Olá, mundo!')

import { UsuarioCompleto } from "./types"

// let nome: string = 'Mariana'

// console.log(nome)

// function exemplo(condicao: boolean): number | string {
//   if (condicao) {
//     return 20
//   } else {
//     return 'Carla'
//   }
// }

// console.log(exemplo(false))

// type Categoria = 'design' | 'tech' | 'vestiario'

// function pintarCategoria(categoria: Categoria) {
//   if (categoria === 'design') {
//     console.log('Pintar de vermelho')
//   } else if (categoria === 'tech') {
//     console.log('Pintar de azul')
//   } else if (categoria === 'vestiario') {
//     console.log('Pintar de rosa')
//   }
// }

// pintarCategoria('design')

// type TProduto = {
//   nome: string,
//   preco: number,
//   descricao: string,
//   disponivel: boolean
// }

// let produto: TProduto = {
//   preco: 20,
//   nome: 'Teclado',
//   descricao: 'Teclado',
//   disponivel: true
// }

// console.log(produto)

// interface IPessoa {
//   nome: string,
//   idade?: number
// }

// const pessoas: IPessoa[] = [
//   {nome: 'Carla', idade: 36},
//   {nome: 'Carlos', idade: 40},
//   {nome: 'Alisson'}
// ]

// console.log(pessoas)

// interface Empresa {
//   nome: string,
//   fundacao: number,
//   pais: string
// }


// interface Produto {
//   nome: string,
//   preco: number,
//   empresaFabricante: Empresa,
//   empresaMontadora: Empresa
// }

// type Produto = {
//   preco: number
// }

// type Carro = {
//   rodas: number,
//   portas: number
// }

// function produtoCarro(dados: Carro & Produto) {
//   console.log(dados.portas, dados.preco, dados.rodas)
// }

// produtoCarro({
//   preco: 20000,
//   rodas: 4,
//   portas: 4
// })

// type Endereco = { endereco: string }
// type Telefone = { telefone: string }

// type Contato = Endereco | Telefone



const usuario: UsuarioCompleto = {
  nome: 'Carla', 
  email: 'carla@gmail.com',
  telefone: '78454545445'
}

console.log(usuario)

interface User {
  id: number,
  name: string,
  age: number,
  email: string
}

// Seleciona propriedades específicas
type UserInfo = Pick<User, 'name' | 'email'>

// Omite propriedades
type UserOmit = Omit<User, 'age'>