import {useCounter, useDispatchCounter} from "./../context/CounterContext";

export const Input = ({name}) => {
  const dispatch = useDispatchCounter();
  const state = useCounter();
  const numChangeHandler = (e) => {
    dispatch({type: 'change', payload: {name: e.target.name, value: e.target.value}});
  };
  console.log(state);
  return (
    <div>
      {name}:
      <input
        type="number"
        name={name}
        value={state[name]}
        onChange={numChangeHandler}
      />
    </div>
  );
}