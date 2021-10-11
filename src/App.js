import React from "react";
import CounterOne from "./comtext/CounterOne";
import CounterProvider from "./comtext/CounterProvider";
function App() {
  return (
    //counterProvider
    <CounterProvider>
      <div>
        <p>one context</p>
        <CounterOne />
      </div>
    </CounterProvider>
  );
}

export default App;
