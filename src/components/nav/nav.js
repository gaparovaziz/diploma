import Logo from "../ui/logo";
import "./nav.css"
import NavItem from "./NavItem/NavItem";
import React from 'react'

import home from "../../assets/navBar/home.svg"
import about from "../../assets/navBar/about.svg"
import product from "../../assets/navBar/products.svg"
import sign from "../../assets/navBar/input.svg"
import Menu from "./Menu/Menu";
function Nav() {
    

    return ( 
        <nav className="Nav">
        <head><link href="https://fonts.googleapis.com/css2?family=Rubik+Wet+Paint&display=swap" rel="stylesheet"/></head>
            <Logo/>
            
            <ul>
                <NavItem url="/"><img src={home} alt='/'/>Home</NavItem>
                <NavItem url="/about"><img src={about} alt='/'/>About</NavItem>
                <NavItem url="/products"><img src={product} alt='/'/>Products</NavItem>
                <NavItem url="/signIn"><img src={sign} alt='/'/>Sign in/up</NavItem>
            </ul>

            <Menu/>
        </nav>
     );
}

export default Nav;