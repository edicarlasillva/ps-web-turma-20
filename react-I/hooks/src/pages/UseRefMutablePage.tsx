import { useRef } from "react";

export function UseRefMutablePage() {
  const countRef = useRef(0);

  console.log(countRef.current);

  function incrementCount() {
    countRef.current += 1;
    console.log(`Count: ${countRef.current}`);
  }
  return (
    <>
      <p>Abra console {countRef.current}</p>
      <button onClick={incrementCount}>Incrementar</button>
    </>
  );
}
