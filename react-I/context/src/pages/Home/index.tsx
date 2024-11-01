import { useContext } from "react";
import { Link } from "react-router-dom";

import { ThemeContext } from "../../contexts/ThemeContext";
import { UserContext } from "../../contexts/UserContext";

import { Container, ThemeToggleButton } from "./styles";

export function Home() {
  const themeContext = useContext(ThemeContext);
  const userContext = useContext(UserContext);

  if (!themeContext) {
    throw new Error("Home deve ser usado dentro de um ThemeContextProvider.");
  }

  if (!userContext) {
    throw new Error("Home deve ser usado dentro de um UserContextProvider.");
  }

  const { isDarkTheme, toggleTheme } = themeContext;

  const { userName, isAuthenticated, login, logout } = userContext;

  return (
    <Container>
      <Link to="/contact">Contato</Link>
      <h1>Troca de Tema com Context API e Styled Components</h1>
      <p>O tema atual é {isDarkTheme ? "Escuro" : "Claro"}</p>

      <ThemeToggleButton onClick={toggleTheme}>
        Alternar para {isDarkTheme ? "Claro" : "Escuro"}
      </ThemeToggleButton>

      {/* Autenticação do usuário */}
      <p>Usuário: {isAuthenticated ? userName : "Desconectado"}</p>

      {isAuthenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={() => login("Maria Eduarda")}>Login</button>
      )}
    </Container>
  );
}
