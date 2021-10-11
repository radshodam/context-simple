import React, { useState } from "react";
//create context
export const CounterContext = React.createContext(); //state
//Dispatcher
export const CounterContextDispatcher = React.createContext(); //setstate
//countProvider
const CounterProvider = ({children} ) => {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={count}>
      <CounterContextDispatcher.Provider value={setCount}>
        {children}
      </CounterContextDispatcher.Provider>
    </CounterContext.Provider>
  );
};

export default CounterProvider;
