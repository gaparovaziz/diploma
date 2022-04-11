import Nav from "./components/nav/nav";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contacts" element={<About />} />
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
