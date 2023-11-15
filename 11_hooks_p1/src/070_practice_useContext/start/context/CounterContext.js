import { createContext, useReducer, useContext } from "react";

const CountContext = createContext();
const CountDispatchContext = createContext();

export const CountProvider = ({children}) => {
  const initState = {
    a: 1,
    b: 2,
    result: 3,
  };

  const reducer = (state, { type, payload }) => {
    switch (type) {
      case "change": {
        const { name, value } = payload;
        return { ...state, [name]: value };
      }
      case "add": {
        return { ...state, result: state.a + state.b };
      }
      case "minus": {
        return { ...state, result: state.a - state.b };
      }
      case "divide": {
        return { ...state, result: state.a / state.b };
      }
      case "multiply": {
        return { ...state, result: state.a * state.b };
      }
      default:
        throw new Error("operator is invalid");
    }
  };

  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <CountContext.Provider value={state}>
      <CountDispatchContext.Provider value={dispatch}>
        {children}
      </CountDispatchContext.Provider>
    </CountContext.Provider>
  );
}

export const useCounter = () => useContext(CountContext);
export const useDispatchCounter = () => useContext(CountDispatchContext);