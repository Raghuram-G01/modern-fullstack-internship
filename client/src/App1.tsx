import { CounterContext } from "./context/Counter";
import { useContext } from "react";
import GrandChild from "./components/GrandChild";

function App() {
  const counterContext = useContext(CounterContext);
  function handleInc(){
    // setCount and count is directly coming from the context
    counterContext.setCount(counterContext.count + 1);
  }

  function handleDec(){
    counterContext.setCount(counterContext.count - 1);
  }
  return (
    <div>
      <h1>Count is: {counterContext.count}</h1>
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
      <h1>GrandChild is rendering:</h1>
      <GrandChild/>
    </div>
  )
}

export default App;
// import Navbar from "./components/Navbar";
// import {Routes, Route} from 'react-router-dom';
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import Users from "./components/Users";
// import Products from "./components/Products";

// function App() {
//   return (
//     <div>
//       {/* <Navbar/>
//       <Users/> */}
//       <Products/>
//       <Routes>
//         <Route path="/" element={<Home/>}></Route>
//          <Route path="/about" element={<About/>}></Route>
//           <Route path="/contact" element={<Contact/>}></Route>
//            <Route path="/login" element={<Login/>}></Route>
//            <Route path="/dashboard" element={<Dashboard/>}></Route>
//       </Routes>
//     </div>
//   )
// }

// export default App
// import Counter from "./components/Counter"
// import { useState } from "react"


// function App() {
//   const [showButton, setShowButton] = useState(true);

//   function handleClick(){
//     setShowButton(!setShowButton);
//   }
 
//   return (
//     <div>
//       <h1>Hello from React</h1>
//       <br /><br />
//        {showButton ? <button onClick={handleClick}>Toggle</button> : ""}
//        {showButton && <Counter/>}
//     </div>
//   )
// }

// export default App