import { useState } from "react";

// 1. input turi turėti value bei onChange, kad funkcionuotų
// 2. reikalingas state, kad kistų reikšmė

const InputExample = () => {
  const [value, setValue] = useState("");
  const [age, setAge] = useState(0);

  // funkcija kuri yra paduodama į age input onChange
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <h2>Mano input reikšmė yra: {value}</h2>
      <input
        value={value}
        // įvykis kuris paleidžiamas kas kartą nuspaudus knopkę
        onChange={(event) => {
          // event arba e - objektas laikantis informacija apie inputą
          // nustatoma input reikšmė
          setValue(event.target.value);
        }}
      />
      <br />
      <h2>Kiek tau metu?</h2>
      <input type="number" value={age} onChange={handleAgeChange} />
    </div>
  );
};

export default InputExample;
