import "./header.css"
function Header(props) {
    const style = {
        backgroundImage: `url(${props.fone})`
      };
    return ( 
        <header className="Header" style={style}>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Rubik+Microbe&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"/>
            </head>
            <div className="text-center">
                <h1 style={{color: props.tColor}}>Find your style</h1>
                <p style={{color: props.tColor, fontFamily: "'Raleway', sans-serif", fontSize: '2.2rem', fontWeight: '600'}}>Online accessories store</p>
            </div>
        </header>
     );
}

export default Header;