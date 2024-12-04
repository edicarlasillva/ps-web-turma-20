import { createContext, ReactNode, useContext, useState } from "react";

interface CounterContext {
  count: number;
  increment: () => void;
}

interface CounterContextProps {
  children: ReactNode;
}

const CounterContext = createContext<CounterContext | undefined>(undefined);

export function CounterProvider({ children }: CounterContextProps) {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <CounterContext.Provider value={{ count, increment }}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounterContext() {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error("Erro");
  }

  return context;
}
