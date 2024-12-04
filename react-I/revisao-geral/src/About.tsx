import { useCounterContext } from "./CounterContext";

export function About() {
  const { increment, count } = useCounterContext();

  return (
    <>
      <h1>About</h1>
      <button onClick={increment}>Incrementar {count}</button>
    </>
  );
}
