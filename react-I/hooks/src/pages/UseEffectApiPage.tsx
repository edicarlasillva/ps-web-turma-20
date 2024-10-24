import { useEffect, useState } from "react";
import axios from "axios";

interface IRepository {
  id: number;
  name: string;
}

export function UseEffectApiPage() {
  const [respositories, setRepositories] = useState<IRepository[]>([]);

  async function fetchRepositories() {
    const response = await axios.get(
      "https://api.github.com/users/edicarlasillva/repos"
    );

    const { data } = response;

    setRepositories(data);
  }

  useEffect(() => {
    fetchRepositories();
  }, []);

  return (
    <>
      {/* Listagem de repositórios */}
      {respositories.map((repository) => (
        <p key={repository.id}>{repository.name}</p>
      ))}
    </>
  );
}
