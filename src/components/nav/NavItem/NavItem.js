import "./NavItem.css"
import { NavLink } from "react-router-dom";

function NavItem(props) {
    const className = [];
    if (props.active) {
        className.push('active')
    }
    return ( 
        <li className="NavItem">
        <NavLink to={props.url}>
            {props.children}
        </NavLink>
        </li>
     );
}

export default NavItem;