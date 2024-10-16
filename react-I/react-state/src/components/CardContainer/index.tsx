import { useState } from 'react'

import { Card } from '../Card'

import { Button, Container } from './styles'

interface ICardContainer {
  id: number
  title: string
  description: string
}

export function CardContainer() {
  const [cards, setCards] = useState<ICardContainer[]>([
    {
      id: 1,
      title: 'Card 1',
      description: 'Descrição do card 1',
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'Descrição do card 2',
    },
  ])

  function handleAddNewCard() {
    const newCard: ICardContainer = {
      id: cards.length + 1,
      title: `Card ${cards.length + 1}`,
      description: `Descrição do card ${cards.length + 1}`,
    }

    // cards.push(newCard);
    // console.log(cards);

    setCards((prevState) => [...prevState, newCard])
    // setCards([...cards, newCard])
  }

  return (
    <Container>
      <Button onClick={handleAddNewCard}>Adicionar</Button>

      {cards.map((card) => (
        <Card key={card.id} title={card.title} description={card.description} />
      ))}
    </Container>
  )
}
