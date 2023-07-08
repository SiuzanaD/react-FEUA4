import PropTypes from "prop-types";

const ProductCount = ({ count, increase, decrease }) => {
  return (
    <>
      <button className="result" onClick={decrease}>
        -
      </button>
      <div className="result">{count}</div>
      <button className="result" onClick={increase}>
        +
      </button>
    </>
  );
};

ProductCount.propTypes = {
  count: PropTypes.number.isRequired,
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
};

export default ProductCount;