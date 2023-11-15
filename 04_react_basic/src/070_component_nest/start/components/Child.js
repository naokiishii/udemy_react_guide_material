import "./Child.css";
import { List } from "./List.js"

const Child = () => {
  return (
    <div className="component">
      <h3>Child Component</h3>
      <List />
    </div>
  );
};

export default Child;
