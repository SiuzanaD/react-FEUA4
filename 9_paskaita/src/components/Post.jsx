import PropTypes from "prop-types";
import "../App.css";

const Post = ({ title, description, date }) => {
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{date}</p>
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Post;