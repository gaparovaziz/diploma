import Logo from "../ui/logo";
import "./nav.css"
import NavItem from "./NavItem/NavItem";
import React from 'react'
function Nav() {
    

    return ( 
        <nav className="Nav">
        <head><link href="https://fonts.googleapis.com/css2?family=Rubik+Wet+Paint&display=swap" rel="stylesheet"/></head>
            <Logo/>
            
            <ul>
                <NavItem url="/">Home</NavItem>
                <NavItem url="/about">About</NavItem>
                <NavItem url="/products">Products</NavItem>
                <NavItem url="/signIn">Sign in/up</NavItem>
            </ul>
        </nav>
     );
}

export default Nav;