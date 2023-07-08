import { useContext } from "react";
import { ThemeContext } from "../App";

const ThemedButton = () => {
  // duomenų ištraukimas iš konteksto
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      Themed Button
    </button>
  );
};

export default ThemedButton;