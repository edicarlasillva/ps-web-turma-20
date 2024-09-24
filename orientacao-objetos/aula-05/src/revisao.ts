// class Bicicleta {
//   constructor(public marca: string, public tipo: string) {}
// }

// class Ciclista {
//   private bicicleta: Bicicleta

//   constructor(public nome: string, bicicleta: Bicicleta) {
//     this.bicicleta = bicicleta
//   }

//   trocarBicicleta(novaBicicleta: Bicicleta) {
//     this.bicicleta = novaBicicleta

//     console.log(`${this.nome} trocou para a bicicleta ${this.bicicleta.marca} ${this.bicicleta.tipo}`)
//   }

//   treinar() {
//     if (this.bicicleta) {
//       console.log(`${this.nome} está treinando com a ${this.bicicleta.marca} ${this.bicicleta.tipo}`)
//     } else {
//       console.log(`${this.nome} não pode treinar sem bicicleta.`)
//     }
//   }

//   iniarCorrida() {
//     if (this.bicicleta) {
//       console.log(`${this.nome} inicia a corrida com sua bicicleta ${this.bicicleta.marca} ${this.bicicleta.tipo}`)
//     } else {
//       console.log(`${this.nome} não pode iniciar corrida sem bicicleta.`)
//     }
//   }
// }

// // Criar instâncias de bicicleta
// const bike1 = new Bicicleta('Caloi', 'Intermediária')
// const bike2 = new Bicicleta('Caloi', 'Speed')

// const ciclista = new Ciclista('Carla', bike1)

// console.log(ciclista)

// ciclista.treinar()
// ciclista.iniarCorrida()
// ciclista.trocarBicicleta(bike2)

class Professor {
  constructor(public nome: string) {
    console.log(`Professor ${this.nome} foi contratado.`)
  }
}

class Universidade {
  private professores: Professor[] = [] // inicializa com array vazio.

  constructor(professores?: Professor[]) {
    if (professores) {
      this.professores = professores
    }
  } // parâmetro opcional

  listarProfessores() {
    if (this.professores.length === 0)  {
      console.log('Nenhum professor cadastrado')
    } else {
      console.log('Lista de professores:')
      this.professores.forEach(professor => console.log(professor.nome))
    }
  }

  adicionarProfessor(professor: Professor) {
    this.professores.push(professor)
    console.log(`Professor ${professor.nome} adicionado à Universidade.`)
  }
}

// Instâncias de professores
const professor1 = new Professor('João')
const professor2 = new Professor('Carla')

const universidade = new Universidade()
universidade.adicionarProfessor(professor1)
universidade.adicionarProfessor(professor2)

console.log(universidade)