import { createContext, useContext } from 'react';

const UserContext = createContext<any>({
  user: null,
  setUser: () => {},
});

const useUserContext = () => useContext(UserContext);

export { UserContext, useUserContext };