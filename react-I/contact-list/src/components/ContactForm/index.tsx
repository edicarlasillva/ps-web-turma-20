import { ChangeEvent, useContext, useState } from "react";

import { ContactContext } from "../../contexts/ContactContext";

export function ContactForm() {
  const contactContext = useContext(ContactContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleAddContact() {
    if (formData.name && formData.email && formData.phone) {
      contactContext?.addContact(formData.name, formData.email, formData.phone);
      setFormData({
        name: "",
        email: "",
        phone: "",
      });
    }
  }

  return (
    <>
      <h1>Adicionar Contato</h1>

      <div>
        <input
          type="text"
          placeholder="Seu nome"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Seu email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Seu telefone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />

        <button onClick={handleAddContact}>Adicionar contato</button>
      </div>
    </>
  );
}
