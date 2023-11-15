import { useState } from "react"

const Example = () => {
  const [fruit, setFruit] = useState("");
  const fruitList = ["Apple", "Banana", "Cherry"];
  return (
    <>
    <p style={{ textAlign: "center" }}>
      startフォルダの内容が表示されます。
      <br />
      練習用に使ってください！
      <br />
      {fruitList.map(f => (
          <label key={f}><input type="radio" value={f} checked={fruit === f} onChange={(e) => setFruit(f)}></input>{f}</label>
      ))}
    </p>
      <h3>{fruit} is selected.</h3></>
      );
};

export default Example;
