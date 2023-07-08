import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Marketplace from "./pages/Marketplace";
import NotFound from "./pages/NotFound";
import User from "./pages/User";
import { UserProvider } from "./contexts/UserContext";
import LoginForm from "./pages/Login";

const App = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </UserProvider>
  );
};

export default App;
