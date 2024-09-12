// import { Livro } from './Livro'
// import { Usuario } from './Usuario'

import { Pessoa } from "./Pessoa";
import { Produto } from "./Produto";
import { Usuario } from "./Usuario";

// // // Imperativo
// // let contador = 0

// // for (let i = 0; i < 5; i++) {
// //   contador += i
// // }

// // console.log(contador)

// // // Procedural
// // function calcularSoma() {
// //   let soma = 0

// //   for (let i = 0; i < 5; i++) {
// //     soma += i
// //   }
// // }

// // calcularSoma()

// // // Funcional
// // // Função Pura
// // const dobrarPuro = (x: number) => x * 2

// // dobrarPuro(2)

// // // Função impura
// // let valorExterno = 7

// // const dobrarValor = (x: number) => {
// //   valorExterno = valorExterno * x

// //   return valorExterno
// // }

// // dobrarValor(2)


// // let listaMutavel = [1, 2, 3]
// // listaMutavel.push(4)

// // // Imutabilidade
// // const listaImutavel = [1, 2, 3]
// // const novaLista = [...listaImutavel , 4]

// // console.log(novaLista)

// // // Declarativa
// // const numeros = [1, 2, 3, 4]

// // console.log(numeros.filter(numero => numero > 2))

// const usuario = new Usuario()

// usuario.nome = 'Alice'
// usuario.idade = 20,
// usuario.email = 'alice@gmail.com'

// console.log(usuario)

// usuario.saudacao()

// const usuario2 = new Usuario()

// usuario2.nome = 'José'
// usuario2.idade = 30,
// usuario2.email = 'jose@gmail.com'

// console.log(usuario2)
// usuario2.saudacao()

// const livro1 = new Livro()
// livro1.titulo = 'Roube como um artista'
// livro1.autor = 'Austin Kleon'
// livro1.anoPublicacao = 2012

// const livro2 = new Livro()
// livro2.titulo = 'A única coisa'
// livro2.autor = 'Gary Keller'
// livro2.anoPublicacao = 2020

// livro1.mostrarDetalhes()
// livro2.mostrarDetalhes()

// const usuario = new Usuario()

// usuario.nome = 'Alice'
// usuario.idade = 25

// const nomeUsuario = usuario.obterNome()
// console.log(`Nome do usuário: ${nomeUsuario}`)

// usuario.atualizarUsuario('Carla')
// usuario.saudacao()

// const pessoa = new Pessoa('Carla', 36)

// console.log(pessoa)
// pessoa.dizerOla()

// const produto1 = new Produto('Geladeira', 3000)

// produto1.mostrarInfos()

const produto1 = new Produto('Geladeira', 5000, 10)

produto1.mostrarPrecoComDesconto()