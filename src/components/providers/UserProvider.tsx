import React, { useState } from 'react';
import { User } from '../../shared/interfaces';
import { UserContext } from '../../shared/hooks';

const UserProvider = ({ children }) => {
  const [user, setUser] = useState<User>(); // Inicializa el estado del usuario

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;