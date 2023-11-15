import { useState } from "react"

const Example = () => {
  const [checked, setChecked] = useState(false);
  return (
    <>
    <p style={{ textAlign: "center" }}>
      startフォルダの内容が表示されます。
      <br />
      練習用に使ってください！
    </p>
    <label>check: <input type="checkbox" checked={checked} onChange={() => setChecked(prev => !prev)}></input></label>
    <p>checkbox is {checked ? "checked" : "not checked"}</p>
    </>
  );
};

export default Example;
