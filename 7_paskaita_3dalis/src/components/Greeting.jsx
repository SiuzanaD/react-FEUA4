import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Greeting = () => {
  const { user } = useContext(UserContext);

  return <h1>{user ? "Jūs esate prisijungęs" : "Sveiki, kaip seikasi?"}</h1>;
};

export default Greeting;