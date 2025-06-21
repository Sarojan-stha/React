import { useState } from "react";
import "./Counter.css";

let temp = 0; // when two counter components in main.jsx the value of temp reamains same
// temp++ doesnt re renders the ui

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    temp++;
    setCount(count + 1);
  };
  const decrement = () => {
    temp--;
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  const incrementBy2 = () => {
    // setCount(count+1);
    // setCount(count+1);
    // this doesnt work beacause the actual value of count is not updated yet until the component is ended
    // Instead use a function inside which works with the latest value

    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  const decrementBy2 = () => {
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="container">
      <h1>COUNTER</h1>
      <h1>{count}</h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={incrementBy2}>+2</button>
        <button onClick={decrementBy2}>-2</button>
        <span>{temp}</span>
      </div>
    </div>
  );
}

export default Counter;
