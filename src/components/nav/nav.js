import Logo from "../ui/logo";
import "./nav.css"
function Nav() {
    return ( 
        <nav className="Nav">
        <head><link href="https://fonts.googleapis.com/css2?family=Rubik+Wet+Paint&display=swap" rel="stylesheet"/></head>
            <div>AcCeSsoRies StyLe</div>
            <Logo/>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Categories</a></li>
                <li><a href="/">about</a></li>
                <li><a href="/">products</a></li>
                <li><a href="/">contacts</a></li>
            </ul>
        </nav>
     );
}

export default Nav;