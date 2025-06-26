import { useRef, useState } from "react";

export default function UseRef() {
  const [count, setCount] = useState(0);
  let ref = useRef();

  function startCount() {
    ref.current = setInterval(() => {
      setCount((count) => count + 1);
    }, 100);
  }

  function stopCount() {
    clearInterval(ref.current);
  }

  return (
    <>
      <button onClick={startCount}>Start</button>
      <span>{count}</span>
      <button onClick={stopCount}>Stop</button>
    </>
  );
}
