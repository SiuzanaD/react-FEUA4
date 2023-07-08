import PropTypes from "prop-types";

const NumbersList = ({ numbers }) => {
  // priskyrėm kintamąjam JSX
  const listItems = numbers.map((number, index) => (
    // key - būtinas darant map funkciją ir grąžinant JSX. key dedam ant pirmo elemento
    <li key={`${number}_${index}`}>{number}</li>
  ));
  // 1 => <li key={1_0}>1</li>
  // 2 => <li key={2_1}>2</li>
  // ...
  // 5 => <li key={5_4}>5</li>

  return <ul>{listItems}</ul>;
};

NumbersList.propTypes = {
  numbers: PropTypes.array.isRequired,
};

export default NumbersList;