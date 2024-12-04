export function TodoList() {
  const person = {
    name: "Carla Silva",
    theme: {
      backgroundColor: "black",
      color: "white",
    },
  };

  return (
    <div style={person.theme}>
      <h1>Lista de afazeres de {person.name}</h1>
      <img src="https://github.com/edicarlasillva.png" alt="Carla Silva" />;
      <ul>
        <li>Estudar componentes</li>
        <li>Estudar props</li>
        <li>Fazer café</li>
      </ul>
    </div>
  );
}
