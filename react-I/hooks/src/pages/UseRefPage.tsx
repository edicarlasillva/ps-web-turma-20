import { useRef } from "react";

export function UseRefPage() {
  const inputRef = useRef<HTMLInputElement>(null);

  function focusInput() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  function inputValue() {
    if (inputRef.current) {
      console.log(inputRef.current.value);
    }
  }

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focar no input</button>
      <button onClick={inputValue}>Mostrar valor do input</button>
    </>
  );
}
