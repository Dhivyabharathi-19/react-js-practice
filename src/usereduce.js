import React from "react";
import { useReducer } from "react";
import "./index.css";
function counterReducer(state, action) {
  if (action.type === "INCREMENT") {
    return { count: state.count + 1 };
  }
  if (action.type === "DECREMENT") {
    return { count: state.count - 1 };
  }
  if (action.type === "RESET") {
    return { count: 0 };
  }
  return state;
}

function UseReduce() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  function incrementHandler() {
    dispatch({ type: "INCREMENT" });
  }

  function decrementHandler() {
    dispatch({ type: "DECREMENT" });
  }

  function resetHandler() {
    dispatch({ type: "RESET" });
  }

  return (
    <div id="app">
      <h1>The (Final?) Counter</h1>
      <p id="actions">
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={resetHandler}>Reset</button>
      </p>
      <p id="counter">{state.count}</p>
    </div>
  );
}

export default UseReduce;
