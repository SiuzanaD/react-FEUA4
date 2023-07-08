import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Product.css";

const ProductArrowButtons = () => {
  return (
    <div className="icons">
      <div className="icon">
        <FaChevronLeft />
      </div>
      <div className="icon">
        <FaChevronRight />
      </div>
    </div>
  );
};

export default ProductArrowButtons;