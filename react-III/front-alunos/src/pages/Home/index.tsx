import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addTodo } from "../../store/slices/todoSlices";

export function Home() {
  const todos = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  function handleAddTodo() {
    const newTodo = {
      id: todos.length + 1,
      title: `Nova tarefa ${todos.length + 1}`,
    };

    dispatch(addTodo(newTodo));
  }

  return (
    <>
      <h1>Lista de tarefas</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>

      <button onClick={handleAddTodo}>Adicionar tarefa</button>
    </>
  );
}
