import { Input } from "./components/Input"
import { Select } from "./components/Select"
import { Result } from "./components/Result"
import { CountProvider } from "./context/CounterContext"

const Example = () => {
  return (
    /* 完成系のJSX */
    // <CalcProvider>
    //   <Input name="a"/>      
    //   <Input name="b" />      
    //   <Select />
    //   <Result />      
    // </CalcProvider>
    <CountProvider>
      <h3>練習問題</h3>
      <p>Example内のコードをコンポーネントに分割してください。また、ステートはContext経由でやり取りしてください。</p>
        <Input name="a"></Input>
        <Input name="b"></Input>
        <Select ></Select>
      <Result></Result>
    </CountProvider>
  );
};

export default Example;
