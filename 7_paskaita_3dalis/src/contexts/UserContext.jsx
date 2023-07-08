import { useState, createContext } from "react";

// default reikšmė reikalinga tipui
// { user: null, setUser: () => null }
const UserContext = createContext({
  user: null,
  handleLogin: () => null,
  handleLogout: () => null,
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};

// UseContext naudojam su useContext - traukiant duomenis
// UserProvider naudojam wrappinant - atiduoda visiem children value={...}
export { UserContext, UserProvider };