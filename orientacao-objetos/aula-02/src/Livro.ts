export class Livro {
  titulo: string
  autor: string
  anoPublicacao: number

  mostrarDetalhes(): void {
    console.log(`O livro ${this.titulo} escrito por ${this.autor} foi publicado em ${this.anoPublicacao}`)
  }
}