
import "./Card.css"
import price from "../../assets/price3.png"

function Card(props) {
    return ( 
        <div className="card d-flex flex-column justify-between" style={{backgroundColor: 'white'}}>
            <img src={props.urlImage} className="image" alt="ups..."></img>
            <div>
                <h4 className="what">{props.title}</h4>
                <p className="info">
                    {props.info}
                </p>
                <p className="d-flex justify-between align-center ">
                    <div><b>PRICE:</b></div>
                    <div><span className="priceNum">{props.price}</span><img src={price} className="priceImage"/></div>
                </p>
                <div className="btns d-flex justify-around mb-10">
                    <button className="buy">BUY</button>
                    <button className="save">SAVE</button>
                </div>
            </div>
        </div> 
     );
}

export default Card;