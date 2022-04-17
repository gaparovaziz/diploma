import img from "../../assets/arrowUp.svg"
function NavScroll() {
    const style = {
        position: 'fixed',
        top: '2rem',
        right: '3rem',
        backgroundColor: 'red',
        borderRadius: '100%',
        padding: '.7rem',
        color: 'red',
        boxShadow: '0 0 6px black'
        
    }
    return ( 
        <a href="/">
            <div>
                <img src={img} style={style} alt='/'></img>
            </div>
        </a>
     );
}

export default NavScroll;