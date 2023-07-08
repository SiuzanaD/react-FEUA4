import Login from "./components/Login";
import Topbar from "./components/Topbar";
import { UserProvider } from "./contexts/UserContext";

const App = () => {
  return (
    <UserProvider>
      <Topbar />
      <Login />
    </UserProvider>
  );
};

export default App;
