import { useState } from "react";
import PropTypes from 'prop-types';
import "./App.css";

export function App({ value = 0 }) {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter((c) => c + 1);
  };

  const handleSubstract = () => setCounter(counter - 1);
  const handleReset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2 aria-label="counter">{counter}</h2>
      <button onClick={handleAdd}>+1</button>
      <button aria-label="btn-decrement" onClick={handleSubstract}>-1</button>
      <button aria-label="btn-reset" onClick={handleReset}>
        Reset
      </button>
    </>
  );
}

App.protoTypes = {
  value: PropTypes.number.isRequired,
}
