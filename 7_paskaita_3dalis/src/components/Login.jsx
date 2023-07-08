import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import Greeting from "./Greeting";
import LoginForm from "./LoginForm";

const Login = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Greeting />
      {!user && <LoginForm />}
    </div>
  );
};

export default Login;