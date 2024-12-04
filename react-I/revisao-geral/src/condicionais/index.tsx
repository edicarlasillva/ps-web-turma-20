interface ItemProps {
  name: string;
  isPacked: boolean;
}

function Item({ name, isPacked }: ItemProps) {
  return <li className="item">{isPacked && `${name} ✅`}</li>;
}

export function List() {
  return (
    <section>
      <h1>Lista de estacionamentos</h1>
      <ul>
        <Item name="Nome 1" isPacked={true} />
        <Item name="Nome 2" isPacked={true} />
        <Item name="Nome 3" isPacked={false} />
      </ul>
    </section>
  );
}
