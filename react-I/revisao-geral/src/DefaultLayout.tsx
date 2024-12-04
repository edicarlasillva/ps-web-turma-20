import { Link, Outlet } from "react-router-dom";

export function DefaultLayout() {
  return (
    <>
      <header>
        <h1>Minha aplicação</h1>
      </header>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
      </nav>

      <Outlet />
    </>
  );
}
