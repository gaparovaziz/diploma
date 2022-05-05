import "./header.css"
function Header(props) {
    const style = {
        backgroundImage: `url(${props.fone})`
      };
    return ( 
        <div style={{backgroundColor: '#000'}}>
            <header className="Header" style={style}>
                <head>
                    <link href="https://fonts.googleapis.com/css2?family=Rubik+Microbe&display=swap" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css2?family=Koulen&display=swap" rel="stylesheet"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Tapestry&display=swap" rel="stylesheet"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Water+Brush&display=swap" rel="stylesheet"></link>
                </head>
                <div className="text-center">
                    <h1 style={{color: props.tColor}}>Find your style</h1>
                    <p style={{color: props.tColor, fontFamily: "'Water Brush', cursive", fontSize: '2.5rem', fontWeight: '600'}}>O n l i n e <span style={{marginRight: '15px'}}/> a c c e s s o r i e s <span style={{marginRight: '15px'}}/>s t o r e</p>
                </div>
            </header>
            <div className="overlay"></div>
        </div>
     );
}

export default Header;