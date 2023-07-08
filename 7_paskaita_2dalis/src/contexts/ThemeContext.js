import { createContext, useState } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const ThemeContext = createContext({
  theme: themes.light,
  toggleDarkMode: () => null, // default funkcijos reiksme (del tipo)
});

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <ThemeContext.Provider
      // value grąžinam objektą, kad galėtume įtalpinti daugiau neigu vieną parametrą
      value={{ theme: darkMode ? themes.dark : themes.light, toggleDarkMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
// ThemeProvider reikia užwrappint App.js arba index.js
// ThemeContext naudojam kai norim ištraukti duomenis iš šito Context
export { ThemeProvider, ThemeContext };
