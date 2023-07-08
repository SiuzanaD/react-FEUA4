import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Topbar = () => {
  const { user, handleLogout } = useContext(UserContext);

  return (
    <div
      style={{
        height: 60,
        background: "black",
        color: "white",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingRight: 40,
      }}
    >
      {user && (
        <>
          {user.username}
          <button onClick={handleLogout} style={{ marginLeft: 8 }}>
            Atsijungti
          </button>
        </>
      )}
    </div>
  );
};

export default Topbar;