import { useContext } from "react";
import { CounterContext } from "../context/Counter";

export default function GrandChild(props:any){
    const {count, setCount} = useContext(CounterContext);

    function handleInc(){
        // props.setCount(props.count + 1);
        setCount(count + 1);
    }
    function handleDec(){
        // props.setCount(props.count - 1);
        setCount(count - 1);
    }
    return (
        <>
        <h1>Hello from GrandChild</h1>
        <h1>Count is: {count}</h1>
        <button onClick={handleInc}>Increment</button>
        <button onClick={handleDec}>Decrement</button>
        </>
    )
}