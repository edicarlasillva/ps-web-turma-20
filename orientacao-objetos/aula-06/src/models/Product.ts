import { v4 as uuidv4 } from 'uuid'

import { User } from './User'
import { Comment } from './Comment'
import { Rating } from './Rating'

import { comments } from '../database/comments'

export enum ProductType {
  Clothes = 'Clothes',
  Shoes = 'Shoes',
  Home = 'Home',
  Pet = 'Pet',
  Special = 'Special'
}

export class Product {
  private readonly _id: string = uuidv4()
  private _ratings: Rating[] = []

  constructor(
    private _name: string, 
    private _value: number, 
    private _type: ProductType
  ) {}

  public get name(): string {
    return this._name
  }

  public get id(): string {
    return this._id
  }

  public get value(): number {
    return this._value
  }

  public show(): string {
    console.log(`${this._name} (R$ ${this._value.toFixed(2)})`)
    this.showComments()

    return "\n-----------------------\n"
  }

  public showComments(): void {
    const productComments = comments.filter(comment => comment.product === this)
    productComments.forEach(comment => {
      console.log(`  [${comment.from.username}]: ${comment.content}`)
    })
  }

  // Adiciona comentário no produto
  public addComment(content: string, user: User): void {
    const comment = new Comment(user, this, content)
    comments.push(comment)
  }

  // Adiciona uma avaliação
  public addRate(rate: number, user: User): void {
    if (rate < 1 || rate > 5) {
      console.log('A avaliação deve ser entre 1 e 5.')
      return
    }

    const rating = new Rating(rate, user)
    this._ratings.push(rating)

    console.log(`Avaliação de ${rate} adicionada por ${user.username}`)
  }

  public toJson() {
    return {
      id: this._id,
      name: this._name,
      price: this._value,
      type: this._type
    }
  }
}