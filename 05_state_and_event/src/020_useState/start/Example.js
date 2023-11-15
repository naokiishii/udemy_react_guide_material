import { useState } from "react";

const Example = () => {
  let [displayValue, setDisplayValue] = useState(0);
  return (
    <>
      <input type="text"
        onChange={(e) => { setDisplayValue(e.target.value) }}></input> = {displayValue}
    </>
  );
};

export default Example;
