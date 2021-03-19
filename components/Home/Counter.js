import React from "react";
import { useState } from "react";
export default () => {
  const [count, setCount] = useState(0);
  //Updates the counter in state by +1
  const incrementCounter = () => {
    setCount(count + 1);
  };

  //Updates the counter in state by  -1
  const decrementCounter = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={decrementCounter}>Decrement</button>
      <h1>{count}</h1>
    </div>
  );
};
