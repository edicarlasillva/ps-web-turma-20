import { Link } from "react-router-dom";

import { Container } from "./styles";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export function Contact() {
  const themeContext = useContext(ThemeContext);

  console.log(themeContext);

  return (
    <Container>
      <Link to="/">Home</Link>
      <h1>Contato</h1>
    </Container>
  );
}
