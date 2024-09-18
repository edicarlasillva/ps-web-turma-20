// class Animal {
//   constructor(protected _nome: string, protected _tipo: string) {}

//   public emitirSom(): void {
//     console.log('Emitindo som genérico do animal.')
//   }

//   public get nome(): string {
//     return this._nome
//   }

//   public set nome(nome: string) {
//     this._nome = nome
//   }

//   public get tipo(): string {
//     return this._tipo
//   }

//   public set tipo(tipo: string) {
//     this._tipo = tipo
//   }
// }

// class Cachorro extends Animal {
//   constructor(nome: string, private _raca: string) {
//     super(nome, 'Cachorro')
//   }

//   public latir(): void {
//     console.log('Au, au!')
//   }

//   public get raca(): string {
//     return this._raca
//   }

//   public set raca(raca: string) {
//     this._raca = raca
//   }
// }

// const cachorro = new Cachorro('Totó', 'Poodle')
// console.log(cachorro)
// cachorro.emitirSom()
// cachorro.latir()

// cachorro.raca = 'Labrador'
// console.log(cachorro)

// console.log(cachorro.raca)
