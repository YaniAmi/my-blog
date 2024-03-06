import { useState } from "react";

const CalculatorPages = () => {
  const [bilanganA, setBilanganA] = useState(0);
  const [bilanganB, setBilanganB] = useState(0);
  const [operator, setOperator] = useState("tambah");
  const [hasil, setHasil] = useState(0);

  const handleInputBilanganA = (event) => {
    console.log("handleInputBilanganA");
    console.log(event.target.value);
    setBilanganA(event.target.value);
  };

  const handleInputBilanganB = (event) => {
    console.log("handleInputBilanganB");
    console.log(event.target.value);
    setBilanganB(event.target.value);
  };

  const handleSelectOperator = (event) => {
    console.log("handleSelectOperator");
    console.log(event.target.value);
    setOperator(event.target.value);
  };

  const handleHitungHasil = () => {
    console.log("handleHitungHasil");
    console.log(bilanganA, bilanganB, operator);
    if (operator === "tambah") {
      setHasil(Number(bilanganA) + Number(bilanganB));
      console.log(typeof bilanganA);
      console.log(typeof bilanganB);
    } else if (operator === "kurang") {
      setHasil(Number(bilanganA) - Number(bilanganB));
    } else if (operator === "bagi") {
      setHasil(Number(bilanganA) / Number(bilanganB));
    } else if (operator === "kali") {
      setHasil(Number(bilanganA) * Number(bilanganB));
    }
  };
  return (
    <div>
      CalkulatorPages {bilanganA}, {operator} {bilanganB}
      <input
        type="number"
        placeholder="bilangan A"
        onChange={handleInputBilanganA}
      ></input>
      <select onChange={handleSelectOperator}>
        <option value="tambah">+</option>
        <option value="kurang">-</option>
        <option value="bagi">/</option>
        <option value="kali">*</option>
      </select>
      <input
        type="number"
        placeholder="bilangan B"
        onChange={handleInputBilanganB}
      ></input>
      <button onClick={handleHitungHasil}>=</button>
      <h1>{hasil}</h1>
    </div>
  );
};

export default CalculatorPages;
