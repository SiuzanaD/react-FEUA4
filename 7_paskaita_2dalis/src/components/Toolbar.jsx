import { useContext } from "react";
import ThemedButton from "./ThemedButton";
import { ThemeContext } from "../contexts/ThemeContext";

const Toolbar = () => {
  // ištraukiam duomenis iš norimo context, naudojam destrukcija
  const { theme, toggleDarkMode } = useContext(ThemeContext);
  return (
    <div>
      <div
        style={{
          height: 100,
          background: theme.background,
          color: theme.foreground,
        }}
      >
        Toolbar
        <button onClick={toggleDarkMode}>Change theme</button>
      </div>
      <ThemedButton />
    </div>
  );
};

export default Toolbar;