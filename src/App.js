import React from "react";
import CounterOne from "./comtext/CounterOne";
import CounterProvider from "./comtext/CounterProvider";
import CountReducer from "./reducer/CountReducer";
import CountReducerObj from "./reducer/CountReducerObj";
import CountReducerObj2 from "./reducer/CountReducerObj2";
function App() {
  return (
    //counterProvider
    <CounterProvider>
      <div>
        <p>one context</p>
        <CounterOne />
        <hr />
        <CountReducer />
        <hr />
        <CountReducerObj />
        <hr/>
        <CountReducerObj2/>
      </div>
    </CounterProvider>
  );
}

export default App;
