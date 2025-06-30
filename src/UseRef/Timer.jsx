import { useEffect, useState } from "react";

export function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Cleanup function to clear the interval
    return () => {
      clearInterval(intervalId);
      console.log("Interval cleared");
    };
  }, []);

  return (
    <>
      <h1>Up Counter</h1>
      <h2>{count}</h2>
    </>
  );
}
