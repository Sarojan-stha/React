import { useReducer } from "react";

export function UseReducerCounter() {
  const initialState = {
    count: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "inc":
        return {
          ...state,
          count: state.count + 1,
        };

      case "dec":
        return {
          ...state,
          count: state.count - 1,
        };

      default:
        break;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>{state.count}</div>
      <button onClick={() => dispatch({ type: "inc" })}>Increment</button>
      <button onClick={() => dispatch({ type: "dec" })}>Decrement</button>
    </>
  );
}
