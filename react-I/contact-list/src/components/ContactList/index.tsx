import { useContext, useState } from "react";

import { ContactContext } from "../../contexts/ContactContext";

export function ContactList() {
  const contactContext = useContext(ContactContext);

  console.log(contactContext);

  const [query, setQuery] = useState("");

  return (
    <>
      <h2>Pesquisar</h2>

      <input
        type="text"
        placeholder="Pesquisar contato"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      <ul>
        {contactContext?.searchContact(query).map((contact) => (
          <li key={contact.id}>
            <span>{contact.name}</span>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>

            <button onClick={() => contactContext.deleteContact(contact.id)}>
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
