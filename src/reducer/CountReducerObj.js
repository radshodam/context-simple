import { useReducer } from "react";
const initialState = {
  firstCounter: 0,
  secondConter: 100,
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "increament":
      // return state + action.val;
      return { ...state, firstCounter: state.firstCounter + action.val };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.val };
    case "reset":
      return initialState;
    case "increament2":
      // return state + action.val;
      return { ...state, secondConter: state.secondConter + action.val };
    case "decrement2":
      return { ...state, secondConter: state.secondConter - action.val };

    default:
      return state;
  }
};

function CountReducerObj() {

  const [count, dispatch] = useReducer(reducer, initialState);
  //state={}
  //actions={}

  //multiple state
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        <h1>
          count is :
          <span className={count.firstCounter >= 0 ? "green" : "red"}>
            {count.firstCounter}
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
          count is :
          <span className={count.secondConter >= 0 ? "green" : "red"}>
            {count.secondConter}
          </span>
        </h1>
        <button onClick={() => dispatch({ type: "increament2", val: 1 })}>
          Add One
        </button>
        <button onClick={() => dispatch({ type: "decrement2", val: 1 })}>
          minus One
        </button>
      </div>
    </div>
  );
}

export default CountReducerObj;
