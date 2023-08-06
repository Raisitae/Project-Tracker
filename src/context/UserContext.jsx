import { createContext, useState, useCallback } from "react";

export const UserContext = createContext();

function ProviderUser({ children }) {
  const [user, setUser] = useState("");

  const handleUser = useCallback((user) => {
    setUser(user);
  }, []);

  const value = {
    handleUser,
    user,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export { ProviderUser };
