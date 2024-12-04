import { useState } from "react";
import { sculptureList } from "./data";

export function State() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex((prevIndex) => (prevIndex + 1) % sculptureList.length);
  }

  function handleMoreClick() {
    setShowMore((prevShowMore) => !prevShowMore);
  }

  const sculpture = sculptureList[index];

  return (
    <>
      <button onClick={handleNextClick}>Próximo</button>
      <h2>
        {sculpture.name} {sculpture.artist}
      </h2>

      <button onClick={handleMoreClick}>
        {showMore ? "Esconder" : "Mostrar"}
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt="" />
    </>
  );
}
