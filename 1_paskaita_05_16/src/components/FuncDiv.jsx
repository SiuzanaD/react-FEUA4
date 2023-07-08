import FuncButton from "./FuncButton";
import PropTypes from "prop-types";

function FuncDiv(props) {
  return (
    <div>
      <h3>Pirmas dublis</h3>
      <p>cia bus tekstas</p>
      <FuncButton {...props.title} />
    </div>
  );
}

FuncDiv.propTypes = {
  title: PropTypes.string,
};

FuncDiv.defaultProps = {
  title: "Click",
};

export default FuncDiv;