import Child from "./components/Child";

const Example = () => {
    const fn = (arg) => `Hello ${arg}`;
    return (
        <>
            <Child color='' />;
            <Child color='red' num={123} fn={fn} />;
        </>
    )
}

export default Example;
