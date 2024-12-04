import { useCounterContext } from "./CounterContext";

export function Home() {
  const { count } = useCounterContext();
  return <h1>Home {count}</h1>;
}
