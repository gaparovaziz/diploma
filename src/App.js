
import Footer from "./components/footer/footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";




import { Route, Routes } from "react-router-dom";

import SignIn from "./pages/Sign/SignIn";
import React from 'react'

import "./index.css"

function App() {
  
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signIn" element={<SignIn/>}/>
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
