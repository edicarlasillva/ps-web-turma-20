// const ref = useRef(0);

import { useRef } from "react";

// function handleClick() {
//   ref.current = ref.current + 1;
//   alert(`Você clicou ${ref.current} vezes.`);
// }
// return <button onClick={handleClick}>Clique {ref.current}</button>;

const inputRef = useRef(null);

function handleClick() {
  if (inputRef.current) {
    inputRef.current.focus();
  }
}
return (
  <>
    <input ref={inputRef} type="text" />
    <button onClick={handleClick}>Focus</button>
  </>
);
