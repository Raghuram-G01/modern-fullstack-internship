import { useState } from "react";
import { useEffect } from "react";

const buttonStyle = {
  backgroundColor: "blue",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  margin: "10px",
};
function Counter() {
  const [count, setCount] = useState(0);
  // count : state variable
  // setCount : function to update the count variable
  useEffect(() => {
    console.log("Component Mounted");
    return () => {
        console.log("Component Unmounted")
    }
  }, [count]);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button style={buttonStyle} onClick={handleIncrement}>Increment</button>
      <button style={buttonStyle} onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
}
export default Counter;
