export interface Usuario {
  nome: string
}

export interface Telefone {
  telefone: string
}

export interface UsuarioCompleto extends Usuario, Telefone {
  email: string
}