import { useReducer } from "react";
const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "increament":
      return state + action.val;
    case "decrement":
      return state - action.val;
    case "reset":
      return 0;
    default:
      return state;
  }
};

function CountReducer() {
  //   const [count, setCount] = useState(0);
  //  1. duty also useState=>state managment
  // 2.reduce

  //step:

  // 1.import useRerducer()
  // 2. useReducer(reducer,initialState)
  // 3. return : [count,dispatch]
  // 4. reducer(state,actions)
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>
        <h1>
          count is :
          <span className={count >= 0 ? "green" : "red"}>{count}</span>
        </h1>
        <button onClick={() => dispatch({ type: "increament", val: 1 })}>
          Add One
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>reset</button>
        <button onClick={() => dispatch({ type: "decrement", val: 1 })}>
          minus One
        </button>
      </div>
    </div>
  );
}

export default CountReducer;
