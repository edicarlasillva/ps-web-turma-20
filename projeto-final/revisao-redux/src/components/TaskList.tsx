import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addTask, removeTask, toggleTask } from "../store/slices/tasksSlice";

export function TaskList() {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks);

  const [taskTitle, setTaskTitle] = useState("");

  function handleAddTask() {
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      completed: false,
    };

    dispatch(addTask(newTask));
    setTaskTitle("");
  }

  function handleRemoveTask(id: number) {
    dispatch(removeTask(id));
  }

  function handleToggleTask(id: number) {
    dispatch(toggleTask(id));
  }

  return (
    <>
      <h1>Lista de tarefas</h1>

      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Adicione uma tarefa"
      />

      <button onClick={handleAddTask}>Adicionar tarefa</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
              onClick={() => handleToggleTask(task.id)}
            >
              {task.title}
            </span>
            <button onClick={() => handleRemoveTask(task.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </>
  );
}
