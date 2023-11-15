import { useState } from "react"

const Example = () => {
  const [value, setValue] = useState("")
  return (
    <p style={{ textAlign: "center" }}>
      startフォルダの内容が表示されます。
      <br />
      練習用に使ってください！
      <div>
        <label htmlFor="text">label</label>
        <div><input type="text" id="text" placeholder="text" value={value} onChange={(e) => setValue(e.target.value)}></input></div>
        <div><textarea type="text" id="textarea" placeholder="text" value={value} onChange={(e) => setValue(e.target.value)}></textarea></div>
        <div><button id="button" onClick={() => setValue("")}>clear</button></div>
      </div>
    </p>
  );
};

export default Example;
