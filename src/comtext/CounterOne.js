import React from "react";
import { useContext } from "react";
// imp conterContext
import { CounterContext, CounterContextDispatcher } from "./CounterProvider";
function CounterOne() {
  // useContext`
  const count = useContext(CounterContext);//state
  const setCount = useContext(CounterContextDispatcher);//set state
  return (
    <div>
      <h1>count is :{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add One</button>
    </div>
  );
}

export default CounterOne;
