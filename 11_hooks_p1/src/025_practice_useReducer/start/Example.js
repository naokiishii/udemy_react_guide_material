import { useReducer } from "react";

const CALC_OPTIONS = ["add", "minus", "divide", "multiply"];

const reducer = (state, payload ) => {
  const { action, name, value } = payload;
  const nums = { ...state };
  if (action === CALC_OPTIONS[0]) {
    return {...nums, result: Number(nums.a) + Number(nums.b)};
  } else if (action === CALC_OPTIONS[1]) {
    return {...nums, result: nums.a - nums.b};
  } else if (action === CALC_OPTIONS[2]) {
    return {...nums, result: nums.a / nums.b};
  } else if (action === CALC_OPTIONS[3]) {
    return {...nums, result: nums.a * nums.b};
  } else {
    return {...nums, [name]: value};
  }
}

const Example = () => {
  const initState = {
    a: 1,
    b: 2,
    result: 3,
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const calculate = (e) => {
    dispatch({action: e.target.value});
  };

  const numChangeHandler = (e) => {
    dispatch({action: "update", name: e.target.name, value: e.target.value});
  }

  return (
    <>
      <h3>練習問題</h3>
      <p>useReducerを使って完成コードと同じ機能を作成してください。</p>
      {<>
        <div>
          a:
          <input
            type="number"
            name="a"
            value={state.a}
            onChange={(e) => numChangeHandler(e)}
          />
        </div>
        <div>
          b:
          <input
            type="number"
            name="b"
            value={state.b}
            onChange={(e) => numChangeHandler(e)}
          />
        </div>
        <select value={state.type} onChange={calculate}>
          {CALC_OPTIONS.map(opt => <option label={opt} key={opt}>{opt}</option>)}
        </select>
        <h1>result：{state.result}</h1></>}
    </>
  );
};

export default Example;
