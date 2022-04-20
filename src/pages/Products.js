import Header from "../components/header/header";
import Card from "./card/Card";

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
            about: 'Accessory. Although it’s a word that simply means “a thing which can be added to something else in order to make it more useful, versatile, or attractive”',
            price: '$10'
        },
        {
            imageURL: "/IMG/2.png",
            title: 'Info about this products of accessories',
            about: 'Accessory. Although it’s a word that simply means “a thing which can be added to something else in order to make it more useful, versatile, or attractive”',
            price: '$10'
        },
        {
            imageURL: "/IMG/3.jpg",
            title: 'Info about this products of accessories',
            about: 'Accessory. Although it’s a word that simply means “a thing which can be added to something else in order to make it more useful, versatile, or attractive”',
            price: '$10'
        },
        {
            imageURL: "/IMG/4.jpg",
            title: 'Info about this products of accessories',
            about: 'Accessory. Although it’s a word that simply means “a thing which can be added to something else in order to make it more useful, versatile, or attractive”',
            price: '$10'
        },
        {
            imageURL: "/IMG/5.jpg",
            title: 'Info about this products of accessories',
            about: 'Accessory. Although it’s a word that simply means “a thing which can be added to something else in order to make it more useful, versatile, or attractive”',
            price: '$10'
        },
        {
            imageURL: "/IMG/6.jpg",
            title: 'Info about this products of accessories',
            about: 'Accessory. Although it’s a word that simply means “a thing which can be added to something else in order to make it more useful, versatile, or attractive”',
            price: '$10'
        },
        {
            imageURL: "/IMG/7.jpg",
            title: 'Info about this products of accessories',
            about: 'Accessory. Although it’s a word that simply means “a thing which can be added to something else in order to make it more useful, versatile, or attractive”',
            price: '$10'
        },
        {
            imageURL: "/IMG/8.jpg",
            title: 'Info about this products of accessories',
            about: 'Accessory. Although it’s a word that simply means “a thing which can be added to something else in order to make it more useful, versatile, or attractive”',
            price: '$10'
        },
        {
            imageURL: "/IMG/9.jpg",
            title: 'Info about this products of accessories',
            about: 'Accessory. Although it’s a word that simply means “a thing which can be added to something else in order to make it more useful, versatile, or attractive”',
            price: '$10'
        },
        {
            imageURL: "/IMG/10.jpg",
            title: 'Info about this products of accessories',
            about: 'Accessory. Although it’s a word that simply means “a thing which can be added to something else in order to make it more useful, versatile, or attractive”',
            price: '$10'
        },
        {
            imageURL: "/IMG/11.jpg",
            title: 'Info about this products of accessories',
            about: 'Accessory. Although it’s a word that simply means “a thing which can be added to something else in order to make it more useful, versatile, or attractive”',
            price: '$10'
        },
        {
            imageURL: "/IMG/12.jpg",
            title: 'Info about this products of accessories',
            about: 'Accessory. Although it’s a word that simply means “a thing which can be added to something else in order to make it more useful, versatile, or attractive”',
            price: '$10'
        },
    ]   
    return ( 
        <main className="d-flex flex-column">
            <Header fone='/img_coverImage/3.jpg' tColor='darkred'/>
            <div className="mainPage">
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