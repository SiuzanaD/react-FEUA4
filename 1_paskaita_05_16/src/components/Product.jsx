import PropTypes from "prop-types";
import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

// arrow funkcija ir props destrukcija
const Product = ({ category, name, price }) => {
  const [rate, setRate] = useState(0);

  return (
    <div className="productCard">
      <div className="category">{category}</div>
      <div>{name}</div>
      <div>
        {rate >= 1 ? (
          <FaStar
            onClick={() =>
              setRate((previousRate) => (previousRate === 1 ? 0 : 1))
            }
          />
        ) : (
          <FaRegStar onClick={() => setRate(1)} />
        )}
        {rate >= 2 ? (
          <FaStar
            onClick={() =>
              setRate((previousRate) => (previousRate === 2 ? 0 : 2))
            }
          />
        ) : (
          <FaRegStar onClick={() => setRate(2)} />
        )}
        {rate >= 3 ? (
          <FaStar
            onClick={() =>
              setRate((previousRate) => (previousRate === 3 ? 0 : 3))
            }
          />
        ) : (
          <FaRegStar onClick={() => setRate(3)} />
        )}
        {rate >= 4 ? (
          <FaStar
            onClick={() =>
              setRate((previousRate) => (previousRate === 4 ? 0 : 4))
            }
          />
        ) : (
          <FaRegStar onClick={() => setRate(4)} />
        )}
        {rate >= 5 ? (
          <FaStar
            onClick={() =>
              setRate((previousRate) => (previousRate === 5 ? 0 : 5))
            }
          />
        ) : (
          <FaRegStar onClick={() => setRate(5)} />
        )}
      </div>
      <div className="price">{price}</div>
    </div>
  );
};

Product.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Product;