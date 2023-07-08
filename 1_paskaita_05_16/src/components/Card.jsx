import PropTypes from "prop-types";

const imgStyle = {
  objectFit: "cover",
  width: "100%",
  borderRadius: "10px 10px 0 0",
};

const pStyle = {
  color: "grey",
  textAlign: "justify",
  margin: "0",
  padding: "10px",
};

const hStyle = {
  paddingLeft: "10px",
  fontFamily: "Arial",
  margin: "10px 0",
};

const divStyle = {
  width: "300px",
  margin: "1rem",
  boxShadow: "0 0 10px grey",
  borderRadius: "10px",
};

function Card(props) {
  return (
    <div style={divStyle}>
      <img style={imgStyle} src={props.imageUrl} alt={props.title} />
      <h2 style={hStyle}>{props.title}</h2>
      <p style={pStyle}>{props.subtitle}</p>
    </div>
  );
}

Card.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Card;