import { createContext, useReducer, useContext } from "react";

export const CounterContext = createContext();
export const CounterSetContext = createContext();

export const CounterProvider = ({children}) => {
  const [state, dispatch] = useReducer((prev, { type, step }) => {
    switch (type) {
      case "+":
        return prev + step;
      case "-":
        return prev - step;
      default:
        throw new Error('不明なactionです。')
    }
  }, 0);

  return (
    <CounterContext.Provider value={state}>
      <CounterSetContext.Provider value={dispatch}>
        {children}
      </CounterSetContext.Provider>
    </CounterContext.Provider>
  );
}

export const useCounter = () => {
  return useContext(CounterContext);
}

export const useCounterDispatch = () => {
  return useContext(CounterSetContext);
}

