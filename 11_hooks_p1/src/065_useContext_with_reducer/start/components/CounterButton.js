import { useCounterDispatch } from "./../context/CounterContext";

const CounterButton = ({calcType, step}) => {
    const dispatch = useCounterDispatch();

    const handleClick = ({calcType, step}) => {
        dispatch({ type: calcType, step: step });
    }
    
    return <button onClick={() => handleClick(calcType, step)}>{calcType}{step}</button>
}
export default CounterButton;