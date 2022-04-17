import Nav from "./components/nav/nav";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";

import NavScroll from "./components/nav/NavScroll";

import { Route, Routes } from "react-router-dom";
import Contacts from "./pages/Contact";

import React from 'react'
import "./index.css"

function App() {
  const [navBar, setNavBar] = React.useState(false)

    const changeNavBar = () => {
        if (window.scrollY >= 470) {
            setNavBar(true)
        }else {
            setNavBar(false)
        }
    }
    
    window.addEventListener('scroll', changeNavBar)
  return (
    <div className="App">
      {navBar ? <NavScroll/> : <Nav/>}
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
