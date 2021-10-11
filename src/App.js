import React from "react";
import CounterOne from "./comtext/CounterOne";
import CounterProvider from "./comtext/CounterProvider";
import CountReducer from "./reducer/CountReducer";
function App() {
  return (
    //counterProvider
    <CounterProvider>
      <div>
        <p>one context</p>
        <CounterOne />
        <hr />
        <CountReducer />
      </div>
    </CounterProvider>
  );
}

export default App;
