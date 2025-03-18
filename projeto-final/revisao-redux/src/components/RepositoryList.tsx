import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchRepositories } from "../store/slices/repositoriesSlice";

export function RepositoryList() {
  const dispatch = useAppDispatch();
  const { loading, repositories } = useAppSelector(
    (state) => state.repositories
  );

  const [username, setUsername] = useState("");

  function handleSearch() {
    dispatch(fetchRepositories(username));
  }

  return (
    <div>
      <h1>Buscar Repositórios do GitHub</h1>

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Digite o nome do usuário"
      />

      <button onClick={handleSearch}>Buscar</button>

      {loading && <p>Carregando...</p>}

      <ul>
        {repositories.map((repository) => (
          <li key={repository.id}>
            <a href={repository.html_url} target="_blank">
              {repository.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
