import "./footer.css"
import img from  "../../assets/home.svg"
function Footer() {
    return ( 
        <footer className="Footer">
            <div>accessories style 2022</div>
            <div>
                <div>INSTAGRAM</div>
                <div>TELEGRAM</div>
                <div>WK <img src={img} alt="home"/></div>
            </div>
        </footer>
     );
}

export default Footer;