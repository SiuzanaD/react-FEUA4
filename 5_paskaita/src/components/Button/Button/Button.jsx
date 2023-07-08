import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ variant = "text", children, ...rest }) => {
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.element.isRequired,
  variant: PropTypes.oneOf(["text", "contained", "outlined"]),
};

export default Button;