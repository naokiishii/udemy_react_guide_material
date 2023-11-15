import {useCounter} from "./../context/CounterContext";

export const Result = () => {
  const state = useCounter();
  return (
    <h3>結果：{state.result}</h3>
  );
}