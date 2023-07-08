import { Link as RouterLink } from "react-router-dom";

const Link = ({ children, ...rest }) => {
  return (
    <RouterLink
      style={{ color: "red", background: "blue", padding: 16 }}
      {...rest}
    >
      {children}
    </RouterLink>
  );
};

export default Link;