import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {}, []);

  const handleCreateTodo = (todo) => {
    // todo = {title: 'test', description: 'how are you?'};
    axios
      .post("https://jsonplaceholder.typicode.com/todos", todo)
      .then((resp) => resp.data)
      .then((response) => {
        // response = {title: 'test', description: 'how are you?', id: 201}
        setData((prevData) => [...prevData, response]);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div
      onClick={() =>
        handleCreateTodo({ title: "test", description: "how are you?" })
      }
    >
      App
    </div>
  );
};

export default App;
