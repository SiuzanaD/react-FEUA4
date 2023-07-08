import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Post.css";

const Post = ({ post }) => {
  const [comments, setComments] = useState([]);
  const { title, body, id } = post;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((resp) => resp.json())
      .then((response) => {
        setComments(response);
      })
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      {comments.length > 0 && (
        <div>
          <strong>{comments[0].email}</strong> - {comments[0].name}
          <div>{comments[0].body}</div>
        </div>
      )}
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
};

export default Post;