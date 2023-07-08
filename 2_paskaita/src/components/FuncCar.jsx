import { useState } from "react";

// funkciniam komponente nera zodelio this.
const FuncCar = () => {
  const [state, setState] = useState({
    brand: "Ford",
    model: "Mustang",
    color: "red",
    year: 1964,
  });

  const changeColor = () => {
    // 1 būdas pasiimti iš state objektą
    setState({ ...state, color: "blue" });

    // 2 būdas pasiimti iš setState objektą
    setState((previousState) => ({ ...previousState, color: "blue" }));

    // 3 būdas pasiimti iš setState objektas su return
    setState((previousState) => {
      return { ...previousState, color: "blue" };
    });
  };

  return (
    <div>
      <h1>My car {state.brand}</h1>
      <p>
        It is a {state.color} {state.model} from {state.year}
      </p>
      <button onClick={changeColor}>Change color</button>
    </div>
  );
};

export default FuncCar;