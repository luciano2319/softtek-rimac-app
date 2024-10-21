import { useState } from 'react';
import { User } from '../../shared/interfaces';
import { UserContext } from '../../shared/hooks';

interface UserProviderProps {
  children: React.ReactNode; // Define the type of the 'children' prop
}

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User>(); // Inicializa el estado del usuario

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;