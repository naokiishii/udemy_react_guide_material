import {useDispatchCounter, useCounter} from "./../context/CounterContext";

export const Select = () => {
  const state = useCounter();
  const dispatch = useDispatchCounter();
  const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

  const calculate = (e) => {
    dispatch({type: e.target.value});
  };

  return (
    <select value={state.type} name="type" onChange={calculate}>
      {CALC_OPTIONS.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
}