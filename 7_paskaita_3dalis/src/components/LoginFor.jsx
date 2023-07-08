import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const LoginForm = () => {
  const { handleLogin } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUserLogin = () => {
    // user - null | {username: "...", password: "..."}
    handleLogin({ username, password });
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleUserLogin}>Login</button>
    </div>
  );
};

export default LoginForm;