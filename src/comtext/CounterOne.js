import React from "react";
import { useContext } from "react";
// imp conterContext
import { CounterContext, CounterContextDispatcher } from "./CounterProvider";
function CounterOne() {
  // useContext`
  const count = useContext(CounterContext); //state
  const setCount = useContext(CounterContextDispatcher); //set state
  return (
    <div>
      <h1>
        count is :<span className={count >= 0 ? "green" : "red"}>{count}</span>
      </h1>
      {/* <button onClick={() => setCount(count + 1)}>Add One</button> */}
      {/* ican use prev */}
      <button onClick={() => setCount((perv) => perv + 1)}>Add One</button>
      <button onClick={() => setCount(0)}>reset</button>
      <button onClick={() => setCount((perv) => perv - 1)}>minus One</button>
    </div>
  );
}

export default CounterOne;
