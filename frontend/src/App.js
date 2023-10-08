import React from "react";
import Home from "./screens/Home";
import Login from "./screens/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./screens/Signup";
import Cart from "./screens/Cart";
import { CartProvider } from "./components/ContextReducer";
const App = () => {
  return (
    <div>
     <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route exact path="/login" element={<Login></Login>}></Route>
          <Route exact path="/signup" element={<Signup></Signup>}></Route>
          <Route exact path="/Cart" element={<Cart></Cart>}></Route>
        </Routes>
      </BrowserRouter>
      </CartProvider>
    </div>
  );
};

export default App;
