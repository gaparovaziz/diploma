import "./Sign.css"
function SignIn() {
    return ( 
        <main className="mainPage d-flex justify-around">
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"/>
            </head>
            <div className="signIn text-center d-flex flex-column justify-between">
                <h1>Sign In With</h1>
                <div className="d-flex justify-around">
                    <button className="faceBook"><img src=""/>FaceBook</button>
                    <button className="google"><img src=""/>Google</button>
                </div>
                <p>USERNAME:</p>
                <input type='text'/>
                <p>PASSWORD:</p>
                <input type='text'/>
                <br/><br/>
                <button className="btn-signIn">Sign In</button>
                <p className="footer">Not a member? Sign Up Now</p>
            </div>
            
            <div className="signUp text-center d-flex flex-column justify-between">
                <h1>Sign Up Form</h1>
                <p>USERNAME:</p>
                <input type='text'/>
                <p>PHONE:</p>
                <input type='text'/>
                <p>EMAIL:</p>
                <input type='text'/>
                <p>PASSWORD:</p>
                <input type='text'/>
                <br/><br/>
                <button className="btn-register">REGISTER</button>
                <p className="footer">Welcome to our shop...</p>
            </div>
        </main>
     );
}

export default SignIn;