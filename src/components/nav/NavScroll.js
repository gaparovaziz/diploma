import Logo from "../ui/logo";
import "./nav.css"
import NavItem from "./NavItem/NavItem";
function NavScroll() {
    return ( 
        <nav className="Nav">
        <head><link href="https://fonts.googleapis.com/css2?family=Rubik+Wet+Paint&display=swap" rel="stylesheet"/></head>
            <Logo/>
            
            <ul>
                <NavItem url="/">Home</NavItem>
                <NavItem url="/about">About</NavItem>
            </ul>
        </nav>
     );
}

export default NavScroll;