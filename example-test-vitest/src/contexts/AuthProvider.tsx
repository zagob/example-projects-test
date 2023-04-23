import { ReactNode, createContext, useState } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

interface AutContextProps {
  signIn: () => void;
  signOut: () => void;
  authenticate: boolean;
}

export const AutContext = createContext({} as AutContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [authenticate, setAuthenticate] = useState(false);

  function signIn() {
    setAuthenticate(true);
  }

  function signOut() {
    setAuthenticate(false);
  }

  return (
    <AutContext.Provider value={{ authenticate, signIn, signOut }}>
      {children}
    </AutContext.Provider>
  );
}
