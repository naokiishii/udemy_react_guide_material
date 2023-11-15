import { useState } from "react"

const Example = () => {
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(10);
    const [countC, setCountC] = useState(100);
    return (
        <>
        <p>Button A clicked {countA} times</p>
        <button onClick={() => {setCountA(countA + 1)}}>Button A</button>
        <p>Button B clicked {countB} times</p>
        <button onClick={() => {setCountB(countB + 1)}}>Button B</button>
        <p>Button C clicked {countC} times</p>
        <button onClick={() => {setCountC(countC + 1)}}>Button C</button>
        </>
    )
  
};

export default Example;
