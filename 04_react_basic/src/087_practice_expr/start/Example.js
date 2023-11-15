const title = 'Expression';
const array = ['item1', 'item2', 'item3'];
const fn = (arg) => {
  return `${arg} Function`;
};
const upperCaseText = 'UpperCaseText';

const Example = () => {
  const title = "Hello JSX"
  const upper = "uppercasetext"
  const expression = "Hello Expression"
  const item_array = ['item1', 'item2', 'item3']
  const hello = () => 'Hello Function'
  return (
    <div className="fragment">
      <h3>Hello JSX</h3>
      <h3>{upper.toUpperCase()}</h3>
      <h3>{expression}</h3>
      <h3>{item_array}</h3>
      <h3>{hello()}</h3>
    </div>
  );
};

export default Example;
