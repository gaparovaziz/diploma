import "./Menu.css"
import menuImage from "../../../assets/navBar/menuNavbar.svg"
function Menu() {
    return ( 
        <button>
            <img src={menuImage} alt='/'/>
        </button>
     );
}

export default Menu;