import "./header.css"
import headerImage from "../../assets/back_fone.webp";
function Header() {
    const style = {
        backgroundImage: `url(${headerImage})`
      };
    return ( 
        <header className="Header" style={style}>
            <head><link href="https://fonts.googleapis.com/css2?family=Rubik+Microbe&display=swap" rel="stylesheet"/></head>
            <div className="text-center">
                <h1>Find your style</h1>
                <p>Online accessories store</p>
            </div>
        </header>
     );
}

export default Header;