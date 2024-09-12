// export class Usuario {
//   nome: string
//   idade: number
//   email?: string

//   saudacao(): void {
//     console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade}.`)
//   }
// }

export class Usuario {
  nome: string
  idade: number

  saudacao(): void {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade}.`)
  }

  obterNome(): string {
    return this.nome
  }

  atualizarUsuario(novoNome: string): void {
    this.nome = novoNome
  }
}
