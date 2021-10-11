import React from "react";
import { useContext } from "react";
// imp conterContext
import { useCount, useCountActions } from "./CounterProvider";
function CounterOne() {
  // useContext`
  const count = useCount(); //state
  //actions
  const actions = useCountActions(); //set state

  //obj Distructcher
  const { addOne, reset, minusOne } = useCountActions(); //set state

  console.log(actions);
  return (
    <div>
      <h1>
        count is :<span className={count >= 0 ? "green" : "red"}>{count}</span>
      </h1>
      \<button onClick={addOne}>Add One</button>
      <button onClick={reset}>reset</button>
      <button onClick={minusOne}>minus One</button>
    </div>
  );
}

export default CounterOne;
//actions
