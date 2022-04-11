import Logo from "../ui/logo";
import "./nav.css"
import NavItem from "./NavItem/NavItem";
function Nav() {
    return ( 
        <nav className="Nav">
        <head><link href="https://fonts.googleapis.com/css2?family=Rubik+Wet+Paint&display=swap" rel="stylesheet"/></head>
            <Logo/>
            <ul>
                <NavItem url="/" active>Home</NavItem>
                <NavItem url="/">Categories</NavItem>
                <NavItem url="/">About</NavItem>
                
            </ul>
        </nav>
     );
}

export default Nav;