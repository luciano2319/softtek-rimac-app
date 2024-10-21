import { createContext, useContext } from 'react';

// Crea el contexto
const UserContext = createContext<any>({
  user: null,
  setUser: () => {},
});

const useUserContext = () => useContext(UserContext);

export { UserContext, useUserContext };