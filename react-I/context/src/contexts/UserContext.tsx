import { createContext, ReactNode, useState } from "react";

interface IUserContext {
  userName: string;
  isAuthenticated: boolean;
  login: (name: string) => void;
  logout: () => void;
}

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContext = createContext<IUserContext | undefined>(undefined);

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [userName, setUserName] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function login(name: string) {
    setUserName(name);
    setIsAuthenticated(true);
  }

  function logout() {
    setUserName("");
    setIsAuthenticated(false);
  }

  return (
    <UserContext.Provider value={{ userName, isAuthenticated, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
