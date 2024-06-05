// const listaDeCompras = ['maçã', 'banana', 'uva']
// const fruta = listaDeCompras[1]

// console.log(fruta)
// console.log(listaDeCompras[listaDeCompras.length - 1])

// const alunos = ['João', 'Marcelo', 'Lucas']
// alunos[alunos.length] = 'Jéssica'

// console.log(alunos)

// const frutas = ['maçã', 'banana', 'uva']

// for (let i = 0; i < listaDeCompras.length; i++ ) {
//   console.log(listaDeCompras[i])
// }

// for (const fruta of frutas) {
//   console.log(fruta)
// }

// const frutas = ['maçã', 'banana', 'uva']
// let indice = 0

// while (indice < frutas.length) {
//   console.log(frutas[indice])
//   indice++
// }

// do {
//   console.log(frutas[indice])
//   indice++
// } while (indice < frutas.length)

// const listaDeCompras = ['maçã', 'banana', 'uva']
// listaDeCompras.push('laranja')

// console.log(listaDeCompras)

// listaDeCompras.unshift('morango')
// console.log(listaDeCompras)

// const elemento = listaDeCompras.pop() // oposto do push
// console.log(elemento)
// console.log(listaDeCompras)

// const frutaRemovida = listaDeCompras.shift() // opsto de unshift
// console.log(frutaRemovida)
// console.log(listaDeCompras)

// const listaDeCompras = ['maçã', 'banana', 'uva']
// const indice = listaDeCompras.indexOf('uva')
// console.log(indice)

// // array.join([separador])
// const valores = [10, 20, 30, 40, 50, 60]

// console.log(valores.join())
// console.log(valores.join(' '))
// console.log(valores.join(' - '))
// console.log(valores.join(' , '))

const listaDeCompras = ['maçã', 'banana', 'uva', 'laranja']
// const cortado = listaDeCompras.slice(0, 3)

// console.log(cortado)

// delete listaDeCompras[1]
// console.log(listaDeCompras.length)
// console.log(listaDeCompras)

// const languages = []
// languages[0] = 'Javascript'
// languages[1] = 'Java'
// languages.push('Python')

// console.log(languages)

// const matriz = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]

// for (const linha of matriz) {
//   for (const elemento of linha) {
//     console.log(elemento)
//   }
// }

// for (let i = 0; i < matriz.length; i++) {
//   for (let j = 0; j < matriz[i].length; j++) {
//     console.log(matriz[i][j])
//   }
// }

// Atividade 2
// Crie  um array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

// Interaja com o array utilizando um loop para mostrar
// no console O brasil ganhou a copa de 1959...
// const brasilCampeao = [1959, 1962, 1970, 1994, 2002]
// for (const ano of brasilCampeao) {
//   console.log(`O brasil ganhou a copa de ${ano}`)
// }

// Atividae 3
// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
// 'Banana', 'Maçã', 'Pera', 'Uva', 'Melância'
// const frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']
// for (const fruta of frutas) {
//   console.log(fruta)

//   if (fruta === 'Pera') {
//     break
//   }
// }

// Atividade 4
// Coloque a última fruta do array em uma variável, 
// sem remover a mesma do array.
// const ultimaFruta = frutas[frutas.length - 1]
// console.log(`Última fruta: ${ultimaFruta}`)

// frutas.forEach((fruta, indice) => {
//   console.log(`forEach ${indice}: ${fruta}`)
// })


// const nomes = ['Patrick', 'Juliano', 'Bruno', 'Lucas']
// for(let i =0; i < nomes.length; i++){
//   console.log(nomes[i])
// }


// const numeros=[1, 2, 3, 4, 5]
// let soma = 0;
// for (const numero of numeros) {
//   soma += numero;
// }
// console.log("a soma dos números é:", soma );pop

/*
Utilizar os métodos push, pop, unshift e shift para manipular um
array
a. Crie um array com o nome "frutas" e adicione 3 tipos de frutas
de sua escolha
b. Utilize o método push para adicionar uma fruta no final do
array
c. Utilize o método pop para remover a última fruta do array
d. Utilize o método unshift para adicionar uma fruta no início do
array
e. Utilize o método shift para remover a primeira fruta do array
f. Exiba o array resultante na tela
*/

// const frutas =["banana", "maça", "bergamota"]
// frutas.push("morango")

// frutas.pop()

// frutas.unshift("laranja")
// frutas.shift()
// console.log(frutas)

// 1. Crie um array chamado numeros contendo 10 números inteiros de sua escolha.
// 2. Escreva um programa que percorra o array e some apenas os números pares.
// 3. Exiba o resultado da soma no console.

// const numeros = [1,2,3,4,5,6,7,8,9,10]
// let soma = 0
// for(const numero of numeros){
    
//     if(numero % 2 === 0){
//         soma +=numero
//     }
// }
// console.log(`O resultado da soma é ${soma}`)

// 1. Crie um array chamado valores contendo 8 números inteiros de sua escolha.
// 2. Escreva um programa que encontre o maior valor no array.
// 3. Exiba o maior valor no console.

// let valores=[1,2,3,4,10, 5,6,7,8]
// let maioresValores=0

// for(const numero of valores){
//     if( maioresValores < numero){
//         maioresValores = numero
//     }
// }
// document.write(maioresValores)

// 1. Crie um array chamado alunos contendo nomes de 10 alunos.
// 2. Escreva um programa que solicita ao usuário um nome de aluno e verifica se esse nome está no array.
// 3. Exiba uma mensagem no console informando se o aluno foi encontrado ou não.

// let alunos=["Juliano", "Patrick", "Jessica", "Joao", "Aline", "Fernanda", "Carla", "Alex", "Anderson", "Sophia"]

// let nome=prompt(`Informe o nome de um aluno`)
// const indice = alunos.indexOf(nome)
// if(indice === -1){
//     console.log("Aluno não encontrado")
// }else{
//     console.log(`Aluno encontrado: ${nome}`)
// }

// Peça ao usuário para inserir uma lista de números inteiros. Em seguida, crie um programa que conte quantos números são pares e quantos são ímpares na lista.


const numeros = []
let continuar = true
let pares = 0
let impares = 0
let paresString =[]
let imparesString =[]
while(continuar){
    const lista = Number(prompt(`Informe um número`))
    numeros.push(lista)
    continuar = confirm('Deseja inserir outro número?')
    if(lista % 2 === 0){
        pares++
        paresString.push(lista)
    }else{
        impares++
        imparesString.push(lista)
    }
}
console.log(`O total de números pares é: ${pares}. São eles: ${paresString}`)
console.log(`O total de números impares é: ${impares}. São eles: ${imparesString}`)
