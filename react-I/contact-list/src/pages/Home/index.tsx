import { Link } from "react-router-dom";

import { ContactList } from "../../components/ContactList";

export function Home() {
  return (
    <>
      <h1>Meus Contatos</h1>

      <Link to="/new-contact">Cadastrar novo</Link>

      <ContactList />
    </>
  );
}
