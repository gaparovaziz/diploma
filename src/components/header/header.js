import "./header.css"
import headerImage from "../../assets/back_fone.webp";
function Header() {
    const style = {
        backgroundImage: `url(${headerImage})`
      };
    return ( 
        <header className="Header" style={style}>
            <head><link href="https://fonts.googleapis.com/css2?family=Rubik+Microbe&display=swap" rel="stylesheet"/></head>
            <h1>accessories style</h1>
            <p>This is and internet shop</p>
        </header>
     );
}

export default Header;