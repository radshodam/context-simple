import { useReducer } from "react";
const initialState = 0
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "increament":
      // return state + action.val;
      return  state + action.val ;
    case "decrement":
      return  state - action.val ;
    case "reset":
      return  initialState ;

    default:
      return state;
  }
};

function CountReducerObj2() {

  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState);
  //state={}
  //actions={}

  //multiple state
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        <h1>
          count is :
          <span className={count >= 0 ? "green" : "red"}>
            {count}
          </span>
        </h1>
        <button onClick={() => dispatch({ type: "increament", val: 1 })}>
          Add One
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>reset</button>
        <button onClick={() => dispatch({ type: "decrement", val: 1 })}>
          minus One
        </button>
      </div>
      <div>
        <h1>
          count2 is :
          <span className={count2 >= 0 ? "green" : "red"}>
            {count2}
          </span>
        </h1>
        <button onClick={() => dispatch2({ type: "increament", val: 1 })}>
          Add One
        </button>
        <button onClick={() => dispatch2({ type: "decrement", val: 1 })}>
          minus One
        </button>
        <button onClick={() => dispatch2({ type: "reset" })}>reset</button>

      </div>
    </div>
  );
}

export default CountReducerObj2;
