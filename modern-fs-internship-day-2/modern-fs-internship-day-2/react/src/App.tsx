// import React from 'react'
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Users from "./components/Users";
import Products from "./components/Products";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
      <Users />
      <Products/>
    </div>
  );
}

export default App;

// import Counter from './components/Counter.tsx'
// import { useState } from 'react'
// function App() {
//   const [state,setState] = useState(true);
//   function handleClick(){
//     setState(!state);
//   }
//   return (
//     <div>
//       <br></br>
//       <button onClick={handleClick}>Toggle</button>
//       {state && <Counter />}
//     </div>
//   )
// }

// export default App
