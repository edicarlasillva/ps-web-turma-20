import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";

interface IContact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface IContactContext {
  contacts: IContact[];
  addContact: (name: string, email: string, phone: string) => void;
  deleteContact: (id: number) => void;
  searchContact: (query: string) => IContact[];
}

interface ContactContextProviderProps {
  children: ReactNode;
}

export const ContactContext = createContext<IContactContext | undefined>(
  undefined
);

export function ContactContextProvider({
  children,
}: ContactContextProviderProps) {
  const [contacts, setContacts] = useState<IContact[]>(() => {
    const storageContacts = localStorage.getItem("contacts");
    return storageContacts ? JSON.parse(storageContacts) : [];
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  // adicionar contato
  const addContact = useCallback(
    (name: string, email: string, phone: string) => {
      setContacts((prevState) => [
        ...prevState,
        {
          id: contacts.length + 1,
          name,
          email,
          phone,
        },
      ]);
    },
    [contacts]
  );

  // excluir contato
  const deleteContact = useCallback((id: number) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== id)
    );
  }, []);

  const searchContact = useCallback(
    (query: string) => {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(query.toLowerCase())
      );
    },
    [contacts]
  );

  const ContactContextValue = {
    contacts,
    addContact,
    deleteContact,
    searchContact,
  };

  return (
    <ContactContext.Provider value={ContactContextValue}>
      {children}
    </ContactContext.Provider>
  );
}
