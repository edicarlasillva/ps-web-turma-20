// Mount
// useEffect(() => {
//   console.log("Componente montado");

import { useEffect, useState } from "react";

//   return () => {
//     console.log("Função de desmontagem.");
//   };
// }, []);

// Update
const [count, setCount] = useState(0);
useEffect(() => {
  console.log(`O contador foi atualizado para ${count}`);

  return () => {
    console.log("Função de desmontagem.");
  };
}, [count]);

return (
  <>
    <p>{count}</p>
    <button onClick={() => setCount(count + 1)}>CLick</button>
  </>
);
