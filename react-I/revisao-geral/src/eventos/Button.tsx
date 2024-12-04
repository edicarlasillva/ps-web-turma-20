export function Button() {
  function handleClick() {
    alert("Você clicou!");
  }

  return <button onClick={handleClick}>Clique</button>;
}
