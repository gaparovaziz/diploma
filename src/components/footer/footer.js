import "./footer.css"
import insta from "../../assets/instagram.png"
import tele from "../../assets/telegram.png"
import wk from "../../assets/wk.png"
function Footer() {
    return ( 
        <footer className="Footer">
            <div><a href="/">accessories style 2022</a></div>
            <div>
                <div><img src={insta} alt="home"/></div>
                <div><img src={tele} className="tele" alt="home"/></div>
                <div><img src={wk} className="wk" alt="home"/> </div>
            </div>
        </footer>
     );
}

export default Footer;