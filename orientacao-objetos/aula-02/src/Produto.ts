// export class Produto {
//   nome: string
//   preco: number

//   constructor(nome: string = 'Produto qualquer', preco: number = 10) {
//     this.nome = nome
//     this.preco = preco
//   }

//   mostrarInfos(): void {
//     console.log(`O produto ${this.nome} custa ${this.preco}`)
//   }
// }

// export class Produto {
//   nome?: string
//   preco?: number

//   constructor(nome?: string, preco?: number) {
//     this.nome = nome
//     this.preco = preco
//   }

//   mostrarInfos(): void {
//     if (this.nome) {
//       console.log(`O produto ${this.nome}`)
//     }

//     if (this.preco) {
//       console.log(`custa ${this.preco}`)
//     }
//   }
// }

export class Produto {
  nome: string
  preco: number
  desconto?: number

  constructor(nome: string, preco: number, desconto?: number) {
    this.nome = nome
    this.preco = preco
    this.desconto = desconto ?? 0 // Se o desconto não for fornecido, assume 0.
  }

  mostrarPrecoComDesconto() {
    const precoFinal = this.preco - (this.preco * (this.desconto ?? 0) / 100)
    console.log(`O preco do produto ${this.nome} é R$${precoFinal}`)
  }
}