// class Exemplo {
//   public variavelPublica: string
//   private variavelPrivada: number 

//   constructor(varPublica: string, varPrivada: number) {
//     this.variavelPublica = varPublica
//     this.variavelPrivada = varPrivada
//   }

//   mostrarDetalhes(): void {
//     console.log(`Variável Pública: ${this.variavelPublica}`)
//     console.log(`Variável Privada: ${this.variavelPrivada}`)
//   }
// }

// const instancia = new Exemplo('Hello', 42)

// instancia.mostrarDetalhes()

// console.log(instancia.variavelPublica)
// console.log(instancia.variavelPrivada)


// class Exemplo {
//   constructor(public variavelPublica: string, private variavelPrivada: number) {}

//   mostrarDetalhes(): void {
//     console.log(`Variável Pública: ${this.variavelPublica}`)
//     console.log(`Variável Privada: ${this.variavelPrivada}`)
//   }
// }

// const instancia = new Exemplo('Hello', 42)

// instancia.mostrarDetalhes()

// console.log(instancia.variavelPublica)
// console.log(instancia.variavelPrivada)

class ContaBancaria {
  constructor(private _valor: number) {}

  // Getter para obter o valor
  get valor(): number {
    return this._valor
  }

  // Setter para definir o valor
  set valor(novoValor: number) {
    if (novoValor >= 0) {
      this._valor = novoValor
    } else {
      console.log('O valor não pode ser negativo.')
    }
  }
}

const conta = new ContaBancaria(10)
console.log(conta.valor)

conta.valor = 20
console.log(conta.valor)

conta.valor = -5
console.log(conta.valor)