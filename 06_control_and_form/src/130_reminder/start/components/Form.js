import { useState } from "react";

const Form = ({onAddTodo}) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <input type="text" value={inputValue} onChange={(t) => setInputValue(t.target.value)}></input>
      <button onClick={() => onAddTodo(inputValue)}>add</button>
    </div>
  );
}

export default Form;