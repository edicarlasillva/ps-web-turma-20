import { ChangeEvent, useState } from 'react'

export function MyInput() {
  const [text, setText] = useState('')

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value)
  }

  return (
    <>
      <input type="text" onChange={handleChange} value={text} />
      <p>Você digitou: {text}</p>
      <button onClick={() => setText('')}>Reiniciar</button>
    </>
  )
}
