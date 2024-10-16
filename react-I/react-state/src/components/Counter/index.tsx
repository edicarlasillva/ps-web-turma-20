import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState<number>(0)

  // function handleIncrementCount() {
  //   setCount(count + 1);
  // }

  return (
    <>
      <h1>Você pressionou {count} vezes o botão</h1>
      {/* <button onClick={handleIncrementCount}>Incrementar</button> */}
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </>
  )
}
