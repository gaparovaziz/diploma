import Nav from "./components/nav/nav";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Home/>
      <About/>
      <Products/>
      <Footer/>

    </div>
  );
}

export default App;
