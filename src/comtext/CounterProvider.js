import React, { useContext, useState } from "react";
//create context
export const CounterContext = React.createContext(); //state
//Dispatcher
export const CounterContextDispatcher = React.createContext(); //setstate
//countProvider
const CounterProvider = ({ children }) => {
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
//actions
export const useCount = () => {
  useContext(CounterContext);
};
//actions And set
export const useCountActions = () => {
  const setCount = useContext(CounterContextDispatcher);

  const addOne = () => {
    setCount((perv) => perv + 1);
  };
  const minusOne = () => {
    setCount((perv) => perv - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return { addOne, minusOne, reset };
};
