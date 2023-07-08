import React from "react";
import PropTypes from "prop-types";

class ClassDiv extends React.Component {
  render() {
    return (
      <div>
        <h3>Class Div</h3>
        <p>cia bus kazkoks tekstas</p>
        <button>{this.props.title}</button>
      </div>
    );
  }
}

ClassDiv.propTypes = {
  title: PropTypes.string,
};

export default ClassDiv;