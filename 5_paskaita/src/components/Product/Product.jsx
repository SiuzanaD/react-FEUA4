import { useState } from "react";
import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";
import Button from "../Button/Button";
import ProductArrowButtons from "./ProductArrowButtons";
import ProductCount from "./ProductCount";
import "./Product.css";

const Product = ({
  image,
  title,
  price,
  description,
  availability,
  category,
}) => {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <div className="product">
      <div className="image">
        <FaSearch className="search" />
        <img src={image} alt={title} />
      </div>
      <div className="productCard">
        <div className="title">
          <p>{title}</p>
          <ProductArrowButtons />
        </div>
        <p className="price">{price.toFixed(2)}€</p>
        <div className="description">{description}</div>
        <p className="availability">
          <b>Availability:</b> <span>{availability} in stock</span>
        </p>
        <div className="counter">
          <ProductCount count={count} increase={increase} decrease={decrease} />
          <Button
            onClick={() => alert(`Added to cart ${count} ${title}`)}
            variant="contained"
          >
            ADD TO CART
          </Button>
        </div>
        <p className="category">Category: {category}</p>
      </div>
    </div>
  );
};

Product.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.element.isRequired,
  availability: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};

export default Product;