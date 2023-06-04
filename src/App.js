import React, { useState } from "react";
import "./App.css";
import Navbar from "./navbar";
import Home from "./Home";
import Loginpage from "./Loginpage";
import Register from "./Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext } from "react";
import Products from "./Products";
import Carts from "./Carts";
export const productData = createContext();
function App() {
  const [CartData, setCartData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [apiState, setApiState] = useState("");
  const getData = (order) => {
    setCartData((prevData) => [...prevData, order]);
    console.log(CartData);
    console.log(apiState);
  };
  const deleteItem = (itemId) => {
    const index = CartData.findIndex((item) => item.id === itemId);
    if (index !== -1) {
      const updatedItems = [...CartData];
      updatedItems.splice(index, 1);
      setCartData(updatedItems);
    }
  };
  return (
    <div className="App">
      <productData.Provider
        value={{
          getData,
          CartData,
          deleteItem,
          isLoggedIn,
          setIsLoggedIn,
          apiState,
          setApiState,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={[<Navbar />, <Home />]} />
            <Route path="/login" element={<Loginpage />} />
            <Route path="/newaccount" element={<Register />} />
            <Route path="/cart" element={<Carts />} />
            <Route path="/electronics" element={[<Navbar />, <Products />]} />
          </Routes>
        </BrowserRouter>
      </productData.Provider>
    </div>
  );
}

export default App;
