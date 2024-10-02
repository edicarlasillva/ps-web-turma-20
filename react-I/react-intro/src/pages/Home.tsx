import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <h1>Bem-vindo ao meu blog!</h1>
      <p>Poststs interessantes</p>

      <nav>
        <ul>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
