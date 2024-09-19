// // // class Aluno {
// // //   constructor(private nome: string, private idade: number) {}

// // //   apresentar() {
// // //     console.log(`Aluno: ${this.nome}, Idade: ${this.idade}`)
// // //   }
// // // }

// // // class Turma {
// // //   constructor(private nome: string, private alunos: Aluno[] = []) {}

// // //   adicionarAluno(aluno: Aluno) {
// // //     this.alunos.push(aluno)
// // //   }

// // //   listarAlunos() {
// // //     console.log(`Alunos da Turma ${this.nome}:`)
// // //     this.alunos.forEach(aluno => {
// // //       aluno.apresentar()
// // //     })
// // //   }
// // // }

// // // const aluno1 = new Aluno('João', 22)
// // // const aluno2 = new Aluno('Carla', 36)

// // // const turmaA = new Turma('Matemática')

// // // turmaA.adicionarAluno(aluno1)
// // // turmaA.adicionarAluno(aluno2)

// // // turmaA.listarAlunos()

// // class Lutador {
// //   constructor(public nome: string, public estilo: string) {}

// //   treinar() {
// //     console.log(`${this.nome} está treinando para a luta.`)
// //   }
// // }

// // class Luta {
// //   constructor(public lutador1: Lutador, public lutador2: Lutador) {}

// //   iniciarLuta() {
// //     console.log(`Começa a luta entre ${this.lutador1.nome} e ${this.lutador2.nome}`)
// //   }
// // }

// // const lutadorA = new Lutador('Ruy', 'Karatê')
// // const lutadorB = new Lutador('Pedro', 'Karatê')

// // // A luta depende de lutadores (composição -> relação forte)
// // const luta = new Luta(lutadorA, lutadorB)
// // luta.iniciarLuta()

// class Monitor {
//   constructor(public nome: string) {}

//   supervisionar() {
//     console.log(`${this.nome} está supervisionando a turma.`)
//   }
// }

// class Turma {
//   constructor(public nome: string, public monitores: Monitor[] = []) {}

//   adicionarMonitor(monitor: Monitor) {
//     this.monitores.push(monitor)
//   }

//   mostrarMonitores() {
//     if (this.monitores.length === 0) {
//       console.log(`A turma ${this.nome} não possui monitores.`)
//     } else {
//       console.log(`Monitores da turma ${this.nome}:`)
//       this.monitores.forEach(monitor => {
//         console.log(`- ${monitor.nome}`)
//       })
//     }
//   }
// }

// const monitorA = new Monitor('Lucas')
// const monitorB = new Monitor('Ana')

// const turmaA = new Turma('Matemática')

// turmaA.adicionarMonitor(monitorA)
// monitorA.supervisionar()
// turmaA.mostrarMonitores()

// type TipoPessoa = {
//   nome: string
//   sobrenome: string
//   nomeCompleto(): string
// }

// class Pessoa implements TipoPessoa {
//   constructor(public nome: string, public sobrenome: string) {}

//   nomeCompleto(): string {
//     return `${this.nome} ${this.sobrenome}`
//   }
// }

// type TipoNome = {
//   nome: string
// }

// type TipoSobrenome = {
//   sobrenome: string
// }

// type TipoNomeCompleto = {
//   nomeCompleto(): string
// }

// type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto

// class Pessoa implements TipoPessoa {
//   constructor(public nome: string, public sobrenome: string) {}

//   nomeCompleto(): string {
//     return `${this.nome} ${this.sobrenome}`
//   }
// }

// const pessoa = new Pessoa('Maria', 'Souza')
// console.log(pessoa.nomeCompleto())

// interface TipoNome {
//   nome: string
// }

// interface TipoSobrenome {
//   sobrenome: string
// }

// interface TipoNomeCompleto {
//   nomeCompleto(): string
// }

// // type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto
// interface TipoPessoa extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

// class Pessoa implements TipoPessoa {
//   constructor(public nome: string, public sobrenome: string) {}

//   nomeCompleto(): string {
//     return `${this.nome} ${this.sobrenome}`
//   }
// }

// const pessoa = new Pessoa('José', 'Souza')
// console.log(pessoa.nomeCompleto())
