// abstract class Animal {
//   constructor(protected nome: string, protected tipo: string) {}

//   emitirSom() {
//     console.log('Emitindo som genérico.')
//   }
// }

// const animal = new Animal('Mimoso', 'Gato')

abstract class Animal {
  constructor(protected nome: string) {}

  abstract produzirSom(): void
}

class Cachorro extends Animal {
  constructor(nome: string) {
    super(nome)
  }

  produzirSom() {
    console.log('Au, au!')
  }
}

class Gato extends Animal {
  constructor(nome: string) {
    super(nome)
  }

  produzirSom() {
    console.log('Miau!')
  }
}

const animal1: Animal = new Cachorro('Totó')
const animal2: Animal = new Gato('Mimoso')

animal1.produzirSom()
animal2.produzirSom()