
import "./Card.css"

function Card(props) {
    return ( 
        <div className="card d-flex flex-column justify-between">
            <img src={props.urlImage} className="image" alt="ups..."></img>
            <div>
                <h4 className="what">{props.title}</h4>
                <p className="info">
                    {props.info}
                </p>
                <p className="d-flex justify-between price">
                    <div><b>PRICE:</b></div>
                    <div>{props.price}</div>
                </p>
                <div className="btns d-flex justify-around">
                    <button className="buy">BUY</button>
                    <button className="save">SAVE</button>
                </div>
            </div>
        </div> 
     );
}

export default Card;