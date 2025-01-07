import React from "react";
import { useReducer } from "react";

function Store() {
  let initialState = 0;

  const [count, dispatch] = useReducer(reduce, initialState);
  function reduce(state, action) {
    if (action === "INCREMENT") {
      return state + 1;
    } else if (action === "DECREMENT") {
      return state - 1;
    } else {
      return state;
    }
  }

  return (
    <div>
      the count is {count}{" "}
      <button onClick={() => dispatch("INCREMENT")}>increase</button>
      <button onClick={() => dispatch("DECREMENT")}>decrese</button>
    </div>
  );
}

export default Store;
