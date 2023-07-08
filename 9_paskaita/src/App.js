import { useEffect, useState } from "react";
import NumbersList from "./components/NumbersList";
import Button from "./components/Button";
import Post from "./components/Post";

const App = () => {
  const [posts, setPosts] = useState([]);

  const numbers = [1, 2, 3, 4, 5];
  const buttonText = ["Hello", "Goodbye", "How are you?", "Where are you?"];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((response) => {
        setPosts(response);
      })
      .catch((error) => console.error(error));
  }, []);

  const showAlert = (text) => {
    alert(text);
  };

  return (
    <div>
      <NumbersList numbers={numbers} />
      <br />
      <NumbersList numbers={[0, 9, 10]} />
      <br />
      <Button onClick={() => showAlert("Hello")}>Hello</Button>
      <Button>Goodbye</Button>
      <Button onClick={() => showAlert("How are you?")}>How are you?</Button>
      <Button>Where are you</Button>
      <br />
      {buttonText.map((text, index) => (
        <Button key={`${text}_${index}`} onClick={() => showAlert(text)}>
          {text}
        </Button>
      ))}
      <br />
      <Post
        title="Hello word"
        description="Testing cases"
        date={new Date().toLocaleDateString()}
      />
      <br />
      {posts.length > 0 && (
        <Post
          title={posts[0].title}
          description={posts[0].body}
          date={new Date().toLocaleDateString()}
        />
      )}
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          description={post.body}
          date={new Date().toLocaleDateString()}
        />
      ))}
    </div>
  );
};

export default App;
