import CounterResult from "./CounterResult"
import CounterButton from "./CounterButton"
import { add, minus, addAsync} from "../store/modules/counter"


const Counter = () => {
    return (
        <>
            <CounterResult />
            <CounterButton step={2} calcType="+" actionCreator={add}/>
            <CounterButton step={2} calcType="-" actionCreator={minus}/>
            <CounterButton step={10} calcType="+" actionCreator={add}/>
            <CounterButton step={10} calcType="-" actionCreator={minus}/>
            <CounterButton step={2} calcType="async+" actionCreator={addAsync}/>
        </>
    )
}
export default Counter;