import "./footer.css"

import d1Icon from '../../assets/FooterImages/d1mainIcon.svg'

import icon1 from '../../assets/FooterImages/facebook.svg'
import icon2 from '../../assets/FooterImages/twitter.svg'
import icon3 from '../../assets/FooterImages/google.svg'
import icon4 from '../../assets/FooterImages/skype.svg'
import icon5 from '../../assets/FooterImages/linkedin.svg'


import d2icon1 from '../../assets/FooterImages/place-point-svgrepo-com.svg'
import d2icon2 from '../../assets/FooterImages/phone.svg'
import d2icon3 from '../../assets/FooterImages/phone-house.svg'
import d2icon4 from '../../assets/FooterImages/email.svg'
import d2icon5 from '../../assets/FooterImages/earth.svg'


import arrowRight from '../../assets/FooterImages/arrow-right.svg'


import d3icon from '../../assets/FooterImages/link.svg'


import d4icon from '../../assets/FooterImages/products.svg'
import image1 from '../../assets/FooterImages/1.png'
import image2 from '../../assets/FooterImages/2.jpg'
import image3 from '../../assets/FooterImages/3.jpg'
import image4 from '../../assets/FooterImages/4.webp'
import image5 from '../../assets/FooterImages/5.jpg'
import image6 from '../../assets/FooterImages/6.jpg'

function Footer() {
    return ( 
        <footer>

            <div className="mainFooter d-flex align-center justify-between p-20">
                <div className="w25p">
                    <h2 className="d-flex align-center">
                        <img src={d1Icon} alt='/'style={{width: '30px'}}/>My AcCesSorieS
                    </h2><br/>
                    <p>The role of a well-chosen bracelet isn't that different from the role of any other piece of jewelry, like a necklace or a ring.</p><br/>
                    
                    <p className="mb-10">Read more:</p>
                    <div className="d1-icons">
                        <div className="d-flex align-center socialNet">
                            <img src={icon1} alt='/'/>
                            <img src={icon2} alt='/'/>
                            <img src={icon3} alt='/'/>
                            <img src={icon4} alt='/'/>
                            <img src={icon5} alt='/'/>
                        </div>
                    </div>
                </div>

                <div className="w25p block-2">
                    <div></div>
                    <p><img src={d2icon1} alt="/"/>1234 North main street PY321654</p>
                    <p><img src={d2icon2} alt="/"/>00 343 445 2343</p>
                    <p><img src={d2icon3} alt="/"/>00 375 123 3431</p>
                    <p><img src={d2icon4} alt="/"/>style-accessories@gmail.com</p>
                    <p><img src={d2icon5} alt="/"/>style-accessories.netlify.app</p>
                </div>

                <div className="w25p block-3">
                    <div className="d-flex align-center justify-center">
                        <img src={d3icon} alt='/' style={{width: '30px'}}/>
                        <h2 className="ml-10">Links</h2>
                    </div>
                    <p><span>BLOG</span><span><img src={arrowRight} alt="/"/></span></p>
                    <p><span>PORTFOLIO</span><span><img src={arrowRight} alt="/"/></span></p>
                    <p><span>HOME</span><span><img src={arrowRight} alt="/"/></span></p>
                    <p><span>ABOUT</span><span><img src={arrowRight} alt="/"/></span></p>
                    <p><span>CONTACT</span><span><img src={arrowRight} alt="/"/></span></p>
                </div>

                <div className="w25p block-4">
                    <div className="d-flex align-center justify-center">
                        <img src={d4icon} alt='/'style={{width: '35px'}}/>
                        <h2 className="ml-10">Latest Products</h2>
                    </div><br/>
                    <div className="images">
                        <div className="text-center">
                            <img src={image1} alt="/" className="img-1"/>
                            <img src={image5} alt="/" className="img-5"/>
                            <img src={image3} alt="/" className="img-3"/>
                        </div>
                        <div className="text-center">
                            <img src={image4} alt="/" className="img-4"/>
                            <img src={image2} alt="/" className="img-2"/>
                            <img src={image6} alt="/" className="img-6"/>
                        </div>
                    </div>
                </div>

            </div>
            <hr/>
            <div className="underMainFooter d-flex justify-between p-20">
                <div><a href="/" style={{color: 'lightgray'}}>@2022 My Footer. All Right reserved.</a></div>
                <div>Home  |  About  |  Blog  |  Portfolio  |  Contact</div>
            </div>


        </footer>
     );
}

export default Footer;