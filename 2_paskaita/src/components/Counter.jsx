import { useState } from "react";
// Sukurkite komponentą Counter kuris atvaizduos du mygtukus ir skaičių.
// Nuspaudus mygtuką skaičius turi padidėti +1 arba -1. Pradinis skaičius yra 0.

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((previousCount) => previousCount + 1);
  };

  const decrement = () => {
    setCount((previousCount) => previousCount - 1);
  };

  const updateCount = (type) => {
    if (type === "decrement") {
      setCount((previousCount) => previousCount - 1);
    } else {
      setCount((previousCount) => previousCount + 1);
    }
  };

  const updateCountV2 = (type) => {
    const updatingCount = type === "decrement" ? -1 : 1;
    setCount((previousCount) => previousCount + updatingCount);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <div className="counter">
        <button onClick={increment}>+1</button>
        <h2>{count}</h2>
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>Reset count</button>
      </div>
      <br />
      <div className="counter">
        <button onClick={updateCount}>+1</button>
        <h2>{count}</h2>
        <button onClick={() => updateCount("decrement")}>-1</button>
        <button onClick={reset}>Reset count</button>
      </div>
      <div className="counter">
        <button onClick={updateCountV2}>+1</button>
        <h2>{count}</h2>
        <button onClick={() => updateCountV2("decrement")}>-1</button>
        <button onClick={reset}>Reset count</button>
      </div>
    </div>
  );
};

export default Counter;