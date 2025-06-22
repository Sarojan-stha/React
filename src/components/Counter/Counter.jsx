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
    // this doesn't work beacause the actual value of count is not updated yet,
    // React does not update the state immediately.
    // It schedules the update and re-renders after all the synchronous code finishes.
    // Instead use a function inside which works with the latest value

    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    //batch events
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

const Increment = (props) => {
  const incrementOnClick = () => {
    return props.setValue(props.value + 1);
  };
  return <button onClick={incrementOnClick}>Increment {props.value}</button>;
};

const Decrement = (props) => {
  const decrementOnClick = () => {
    return props.setValue(props.value - 1);
  };
  return <button onClick={decrementOnClick}>Decrement {props.value}</button>;
};

const Reset = (props) => {
  function reset() {
    props.setValue(0);
  }
  return <button onClick={reset}>Reset</button>;
};
//the props are pass by reference
export function CounterWithProps() {
  const [value, setValue] = useState(0);
  return (
    <>
      <Increment value={value} setValue={setValue} />
      <Decrement value={value} setValue={setValue} />
      <Reset setValue={setValue} />
    </>
  );
}

export default Counter;
