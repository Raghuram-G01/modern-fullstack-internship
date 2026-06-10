// data is present inside Parent Component
// but your GrandChild Component also needs the same data 
// so you need to pass all the way from Parent --> Child --> GrandChild
// Problem:  The intermediate components don't even need the data
// still they are receiving.
// Problem solution -- Context API
import { useState } from "react";
import Child from './Child';

export default function Parent(){
    const [count, setCount] = useState(0);

    return (
        <>
        <h1>Parent:</h1>
        <Child count = {count} setCount = {setCount}/>
        </>
    )
}