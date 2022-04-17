
import LeatherBelt from "../assets/someAccesses/LeatherBelt.jpg"
import LeatherWalley from "../assets/someAccesses/LeatherWallet.jpg"
import rign from "../assets/someAccesses/rign1.jpg"
import sunGlasses from "../assets/someAccesses/sunGlasses.jpg"
import whatches from "../assets/someAccesses/whatches.jpg"
import whitePocket from "../assets/someAccesses/whitePocket.jpg"

import search from "../assets/icons/search.png"

import twitter from "../assets/icons/twitter.jpg"
import facebook from "../assets/icons/facebook.png"
import instagram from "../assets/icons/insta.png"
import wk from "../assets/icons/wk.png"
import youtube from "../assets/icons/youtube.jpg"

import brave from "../assets/menuSection/brave.jpg"
import clother from "../assets/menuSection/clother.jpg"
import scaffForMan from "../assets/menuSection/scaffForMan.jpg"
import tie from "../assets/menuSection/tie.jpg"
import watch from "../assets/menuSection/watch.jpg"
import hair from "../assets/menuSection/hairStyle.jpg"
import body from "../assets/menuSection/healthy.jpg"


import "./About.css"
function About() {
    return ( 
        <div className="mainPage">
            <main className="leftSide">
            <h1>Men's accessories that will always be in fashion</h1>

            <p>Accessories: no worthy outfit is complete without them. It's like béarnaise and steak, butter and bread, olive and martini. Well, you get the idea. But sometimes it can be difficult to understand how successful the purchase of any of the accessories can be. Fortunately, history, based on trial and error, brought out those things in a man's wardrobe that will never be redundant and will not lose their relevance. If an accessory looked good 50 years ago, it still looks good now. That most likely, it will be popular in 50 years. We present you men's accessories that will never go out of style.</p>

            <h2>Classic sunglasses</h2>
            <p>Few things are as popular among men's accessories as sunglasses. Practical, stylish and covering dark circles around the eyes when needed. The glasses conjure images of golden age movie stars like Steve McQueen.</p>

            <div className="text-center"><img src={sunGlasses}/></div>

            <p>This suggests that the most popular styles have changed little in recent decades. Aviators, Wayfarers and Clubmaster are time-tested goggles that suit different face shapes. Seeing as a pair of decent sunglasses will last a lifetime, don't be afraid to invest in buying them. If you manage to extend their lifespan, keep a classic and understated style with black or tortoiseshell frames and brown, black or dark green lenses. Be sure to choose glasses according to the shape of your face.</p>

            <h2>Leather wallet</h2>
            <p>With a leather wallet, paying for a glass of beer is as easy as with a smartwatch. But you will make a completely different impression. It seems that the wallet in hand remains a stylish accessory even today.</p>

            <div className="text-center"><img src={LeatherWalley}/></div>

            <p>Practical, contoured and perfected over time. A leather wallet is a partner that will take care of your business and manage your personal finances. It is for this reason that many men prefer their wallet to have the initials of the owner. Which speaks of intentions to keep it for life, even if the contents are not enough until the end of the month.</p>

            <h2>Stainless steel watch</h2>
            <p>With understated style, stainless steel watches are capable of lasting more than one life, but several when passed down from generation to generation. The material, which has its roots in the manufacture of weapons, is as attractive as it is durable. These watches are also versatile, combine them with a suit and tie or T-shirt and chinos and they will be appropriate everywhere.</p>

            <div className="text-center"><img src={whatches}/></div>

            <p>Even half a century later, when a dial and a calendar are built into contact lenses, truly stylish men will look at their wrist when someone asks for the time.</p>

            <h2>Leather belt</h2>
            <p>For fashionable men, the classic belt is much more than just a trouser hold. It is also a stylish accessory that can enhance the elegance of your look. Thus, choosing the right belt requires you to give back when buying. From color matching to texture selection, choosing which belt to wear requires thought. After all, a good belt does more than just hold the pants, it is part of the appearance of a man. Whether it's a much-needed separation for tall men between the upper and lower torso, or a subtle compliment to a leather derby. A decent cowhide belt will be popular for a long time, while other accessories will fall out of fashion.</p>

            <div className="text-center"><img src={LeatherBelt}/></div>

            <h2>White pocket square</h2>
            <p>Any formal outfit needs to be accessorized, and what could be better than a white pocket square? Accessory used with costumes since around the 1920s. From Frank Sinatra and Humphrey Bogart to Tom Ford and Daniel Craig, the white pocket square is an accessory for all ages and ages.</p>

            <div className="text-center"><img src={whitePocket}/></div>


            <h2>Rings</h2>
            <p>Not all men are confident enough to wear rings. Many people think that the only ring a man should wear is an engagement ring. Fortunately, things have changed in recent times and men have begun to realize the potential of rings as fashion accessories. Men's fashion rings will become more common in 2019. The more men start wearing them, the more others will have the courage to follow this trend.</p>

            <div className="text-center"><img src={rign}/></div>

            <p>There are a lot of men's rings these days. This allows men to easily express their style through jewelry. Whether you prefer thin or chunky rings, there are cool options for all styles. To make your jewelry game even more interesting, check out our men's ring guide.</p>

            <h2>Finally</h2>
            <p>Last but not least, you need to make sure that all of your accessories are neat and in good condition. Now that you have found out which accessories will not go out of fashion soon. You just have to find out if all the accessories you have need to be updated. Are the bags you use in good shape or do you need new ones? Do you have classic belts that you can wear with jeans and suits? And finally, is your wallet clean and meets your needs (enough space for all cards/cash)? Think about all the accessories you use on a daily or monthly basis and replace anything that is broken or horribly worn.</p>
        </main>

        <div className="rightSide">
            <div className="stick">
                <div className="d-flex">
                    <input type='text' placeholder='search in google' className="inputGoogle"/>
                    <button><img src={search} className='search'/></button>
                </div>
                <p>WE ARE IN SOCIAL NETWORKS:</p>
                <div className="socialNet">
                    <img src={facebook} alt="facebook"/>
                    <img src={twitter} alt="twitter"/>
                    <img src={youtube} alt="youtube"/>
                    <img src={instagram} alt="instagram"/>
                    <img src={wk} alt="wk"/>
                </div>

                <p>Popular today:</p>

                <div className="chapterNew">
                    <div><img src={scaffForMan}/><a href="https://www.google.com/search?q=How+to+tie+a+scarf+for+a+man%3F&rlz=1C1GGRV_ruKG996KG996&oq=How+to+tie+a+scarf+for+a+man%3F&aqs=chrome..69i57j0i10i22i30j0i390l3.777j0j15&sourceid=chrome&ie=UTF-8">How to tie a scarf for a man?</a></div>

                    <div><img src={watch}/><a href="https://www.google.com/search?q=The+best+men%27s+watches%3A+which+company+to+choose%3F&rlz=1C1GGRV_ruKG996KG996&sxsrf=APq-WBu9V2CB7x-CLqEGCvgSH2y1ZZ5EiQ%3A1650179251362&ei=s7xbYuTYFZaPxc8PvMKikAk&ved=0ahUKEwik_t7gxJr3AhWWR_EDHTyhCJIQ4dUDCA4&uact=5&oq=The+best+men%27s+watches%3A+which+company+to+choose%3F&gs_lcp=Cgdnd3Mtd2l6EAMyBQghEKABOgcIIxCwAxAnOgcIABBHELADSgQIQRgASgQIRhgAUI8IWI8IYLwWaAFwAXgAgAHQAYgB0AGSAQMyLTGYAQCgAQKgAQHIAQnAAQE&sclient=gws-wiz">The best men's watches: which company to choose?</a></div>

                    <div><img src={clother}/><a href="https://www.google.com/search?q=How+to+choose+clothes+for+a+man%3F&rlz=1C1GGRV_ruKG996KG996&sxsrf=APq-WBu-TbRiqEB44atbQR7Y8VW5c3C34Q%3A1650179352714&ei=GL1bYtKeK7iSxc8P9IydaA&ved=0ahUKEwjSiomRxZr3AhU4SfEDHXRGBw0Q4dUDCA4&uact=5&oq=How+to+choose+clothes+for+a+man%3F&gs_lcp=Cgdnd3Mtd2l6EAMyCAghEBYQHRAeMggIIRAWEB0QHjIICCEQFhAdEB4yCAghEBYQHRAeMggIIRAWEB0QHjIICCEQFhAdEB4yCAghEBYQHRAeMggIIRAWEB0QHjIICCEQFhAdEB4yCAghEBYQHRAeOgcIABBHELADSgQIQRgASgQIRhgAUKsKWKsKYO4SaAFwAXgAgAGlAYgBpQGSAQMwLjGYAQCgAQKgAQHIAQjAAQE&sclient=gws-wiz">How to choose clothes for a man?</a></div>

                    <div><img src={tie}/><a href="https://www.google.com/search?q=How+to+tie+a+tie%3F&rlz=1C1GGRV_ruKG996KG996&sxsrf=APq-WBtOBOZJPvirU_I9ytlhyk1c0FRIuA%3A1650179395086&ei=Q71bYrL2BMCUxc8P67K8oA0&ved=0ahUKEwjyo6OlxZr3AhVASvEDHWsZD9QQ4dUDCA4&uact=5&oq=How+to+tie+a+tie%3F&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIABBHELADSgQIQRgASgQIRhgAULEIWLEIYPcQaAFwAXgAgAGeAYgBngGSAQMwLjGYAQCgAQKgAQHIAQjAAQE&sclient=gws-wiz">How to tie a tie?</a></div>

                    <div><img src={brave} className="brave"/><a href="https://www.youtube.com/watch?v=paUSXWMboxM">10 tips for the right shave</a></div>

                    <div><img src={hair}/><a href="https://www.youtube.com/watch?v=7LA4zIYOF2M">How to choose right hair style?</a></div>

                    <div><img src={body} className="brave"/><a href="https://www.youtube.com/watch?v=Y8HIFRPU6pM">Healthy lifeStyle | body pumping</a></div>
                </div>
            </div>
        </div>
    </div>
     );
}

export default About;