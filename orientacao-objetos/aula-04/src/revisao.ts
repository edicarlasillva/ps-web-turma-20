// class Animal {
//   constructor(protected nome: string, protected tipo: string) {}

//   emitirSom() {
//     console.log(`${this.nome} faz algum som.`)
//   }
// }

// class Cachorro extends Animal {
//   constructor(nome: string, private _raca: string) {
//     super(nome, 'Cachorro')
//   }

//   get raca() {
//     return this._raca
//   }

//   latir() {
//     console.log(`${this.nome} ${this.raca} está latindo.`)
//   }
// }

// const meuCachorro = new Cachorro('Rex', 'Labrador')

// meuCachorro.emitirSom()
// meuCachorro.latir()

// abstract class TipoPessoa {
//   protected abstract nome: string
//   protected abstract sobrenome: string
//   protected abstract nomeCompleto(): string
// }

// class Pessoa extends TipoPessoa {
//   constructor(protected nome: string, protected sobrenome: string) {
//     super()
//   }

//   nomeCompleto(): string {
//     return `${this.nome} ${this.sobrenome}`
//   }
// }

// const pessoa = new Pessoa('Carla', 'Silva')
// console.log(pessoa)