import { useMemo } from "react";

const [number, setNumber] = useState(0);

const doubled = useMemo(() => {
  console.log("Calculando o dobro...");
  return number * 2;
}, [number]);

return (
  <>
    <p>Numero: {number}</p>
    <p>Dobro: {doubled}</p>

    <input
      type="text"
      value={number}
      onChange={(event) => setNumber(Number(event?.target.value))}
    />
  </>
);
