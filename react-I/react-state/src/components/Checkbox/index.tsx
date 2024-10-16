import { ChangeEvent, useState } from 'react'

export function Checkbox() {
  const [liked, setLiked] = useState<boolean>(false)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setLiked(event.target.checked)
  }

  return (
    <>
      <input type="checkbox" onChange={handleChange} checked={liked} />
      <p>Você {liked ? 'curtiu' : 'não curtiu'} isso.</p>
    </>
  )
}
