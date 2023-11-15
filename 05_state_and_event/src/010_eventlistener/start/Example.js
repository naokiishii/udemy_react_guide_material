const Example = () => {
  const clickHandler = () => {
    alert('button is clicked')
  }
  return (
    <>
      <button onClick={clickHandler}>click me</button>
      <button>click me</button>
    </>
  );
};

export default Example;
