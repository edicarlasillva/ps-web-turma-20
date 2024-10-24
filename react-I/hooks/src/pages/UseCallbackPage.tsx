import { memo, useCallback, useState } from "react";

interface ButtonCaountProps {
  onIncrement: () => void;
}

const ButtonCounter = memo(({ onIncrement }: ButtonCaountProps) => {
  console.log("Botão re-renderizou!");
  return <button onClick={onIncrement}>Incrementar</button>;
});

export function UseCallbackPage() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <>
      <h1>Contador: {count}</h1>
      <ButtonCounter onIncrement={increment} />
    </>
  );
}
