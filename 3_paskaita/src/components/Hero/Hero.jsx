import PropTypes from "prop-types";
import "./Hero.css";

// jeigu yra atvaizduoja, jeigu nera nerodo &&
const Hero = ({ title, subtitle }) => {
  return (
    <div className="hero">
      {title && <h1>{title}</h1>}  
      {subtitle && <h3>{subtitle}</h3>}
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Hero;