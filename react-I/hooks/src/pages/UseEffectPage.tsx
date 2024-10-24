import { useEffect, useState } from "react";

export function UseEffectPage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 5) {
      console.log("Alterou o estado. Renderizou!");
    }
  }, [count]);

  return (
    <>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount((prevState) => prevState + 1)}>
        Clique aqui
      </button>
    </>
  );
}
