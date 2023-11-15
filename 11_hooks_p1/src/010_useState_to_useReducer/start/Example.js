import { useState, useReducer } from "react";

const Example = () => {
  const [state, setState] = useState(0);
  const [rstate, dispatch] = useReducer((prev, action) => {
    if(action === "+") {
      return ++prev;
    } else if (action === "-") {
      return --prev;
    }
    return prev;
  }, 0);

  const countUp = () => {
    setState(prev => ++prev);
  }
  const rCountUp = () => {
    dispatch("+");
  }
  const rCountDown = () => {
    dispatch("-");
  }
  
  return (
    <>
    <h3>{state}</h3>
    <button onClick={countUp}>+</button>
    <h3>{rstate}</h3>
    <button onClick={rCountUp}>+</button>
    <button onClick={rCountDown}>-</button>
    </>
  );
};

export default Example;
