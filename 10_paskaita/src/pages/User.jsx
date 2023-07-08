import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((resp) => resp.json())
      .then((response) => {
        setUser(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return <div>User {user && user.name}</div>;
};

export default User;