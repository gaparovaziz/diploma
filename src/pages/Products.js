import Header from "../components/header/header";
import Card from "./card/Card";

import React from 'react'
import Nav from "../components/nav/nav";

function Products() {
    const styleMain = {
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
        maxWidth: '85%',
        margin: '0 auto'
    }

    const products = [
        {
            imageURL: "/IMG/1.jpg",
            title: 'Info about this products of accessories',
            about: 'Accessory. Although it’s a word that simply means “a thing which can be added to something else in order”',
            price: '$10'
        },
        {
            imageURL: "/IMG/2.png",
            title: 'Once we start with the basic premise that yes',
            about: 'Bracelets evolved over time from good luck charm to status symbol to the modern style accessory for men.',
            price: '$12'
        },
        {
            imageURL: "/IMG/3.jpg",
            title: 'The role of a well-chosen bracelet',
            about: 'Depending on which part of the globe you call home, the idea of men wearing a bracelet is either normal or plain unheard of.',
            price: '$12'
        },
        {
            imageURL: "/IMG/4.jpg",
            title: 'Definitely a distinct part of the look.',
            about: 'Accessory. Although it’s a word that simply means “a thing which can be added to something else in order to make it more useful, versatile, or attractive”',
            price: '$10'
        },
        {
            imageURL: "/IMG/5.jpg",
            title: 'Metallic and upscale looking is a natural fit',
            about: 'Bracelets, like watches, can be worn daily. Some are dressier and suit more formal occasions. The variety of materials',
            price: '$10'
        },
        {
            imageURL: "/IMG/6.jpg",
            title: 'Sorts of bracelets with a rough-edged',
            about: 'Brass and hemp. A bracelet is a versatile accessory that  reflects your personality and brings out the color in your outfits.',
            price: '$11'
        },
        {
            imageURL: "/IMG/7.jpg",
            title: 'Emphasizing your overall look.',
            about: 'The five points listed below are the reasons why a man might consider strapping a shiny piece of metal, nylon or leather on his wrist.',
            price: '$15'
        },
        {
            imageURL: "/IMG/8.jpg",
            title: 'As with necklaces, it"s good',
            about: 'Accessories are visual cues to your personality. Interesting accessories always draw attention. You might find strangers start approaching you more often when you wear a bracelet',
            price: '$14'
        },
        {
            imageURL: "/IMG/9.jpg",
            title: 'A last note that"s going to be true',
            about: 'Wearing a bracelet can be a great conversation starter. It could be the excuse the pretty woman in a cafe needs to strike up a conversation.',
            price: '$11'
        },
        {
            imageURL: "/IMG/10.jpg",
            title: 'In both cases, however, notice',
            about: 'In a world where everyone looks uniform, wearing an eye-catching accessory sets you apart and makes you appear more interesting.',
            price: '$13'
        },
        {
            imageURL: "/IMG/11.jpg",
            title: 'Bracelet sliding back and forth gets old fast.',
            about: 'It attracts attention in a good way. Perhaps you:re on a beach and the only accessory you can wear is a bracelet.',
            price: '$13'
        },
        {
            imageURL: "/IMG/12.jpg",
            title: 'Lighter stuff like rope-and-bead pieces can have a little',
            about: 'You"re able to share your appreciation for art history and beautiful hand made artifacts. You could connect with a business acquaintance just by relating how you picked',
            price: '$12'
        },
    ]   

    return ( 
        <main className="d-flex flex-column">
            <div>
                <Nav/>
                <Header fone='/img_coverImage/3.jpg' tColor='orange'/>
            </div>
            <div className="mainPage productPage">
                <div style={styleMain}>
                    {
                        products.map(obj => (
                            <Card
                                urlImage={obj.imageURL}
                                title={obj.title}
                                info={obj.about}
                                price={obj.price}
                            />
                        ))
                    }
                </div>   
            </div>

        </main>
     );
}

export default Products;