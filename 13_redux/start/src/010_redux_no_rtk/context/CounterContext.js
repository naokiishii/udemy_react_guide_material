import { createContext, useContext, useReducer } from "react";
import { store, reducer } from "./../store"

const CounterContext = createContext();
const CounterDispatchContext = createContext();

const CounterProvider = ({ children }) => {

}

const useCounter = () => {
  return useContext(CounterContext);
}

const useCounterDispatch = () => {
  return useContext(CounterDispatchContext);
}

export { CounterProvider, useCounter, useCounterDispatch }