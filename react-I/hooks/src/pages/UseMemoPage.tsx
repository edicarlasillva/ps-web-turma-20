import { useMemo, useState } from "react";

export function UseMemoPage() {
  const [count, setCount] = useState(0);
  const [myList, setMyList] = useState<number[]>([1, 2, 3, 4, 5, 6]);

  const total = useMemo(() => {
    console.log("Calculando..");
    return myList.reduce((acc, item) => acc + item);
  }, [myList]);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function addToList() {
    setMyList((prevList) => [...prevList, prevList.length + 1]);
  }
  return (
    <>
      <p>Contador: {count}</p>
      <button onClick={increment}>Incrementar</button>

      <p>Total da lista: {total}</p>
      <button onClick={addToList}>Adicionar</button>
    </>
  );
}
