import React, { useState } from "react";
function Course(props){

    let [purchased,setPurchased] = useState('Get it now');
    let [discount,setDiscount] = useState(props.price);

    function BuyCard(dis){
        console.log(props.company,"Purchased with",dis,"% discount");
        setPurchased('Already Purchased');
        setDiscount(discount - dis);
    }
    return(
       props.company && <div className="card">
            <img src={props.image}/>
            <div className="card-content">
               <h3>{props.company}</h3>
               <p>{props.price}</p>
               <button onClick={(event) => BuyCard(20,event)}>Buy Now</button>
               <button onClick={() => props.delete(props.id)}>Delete</button>
               <p>{purchased}</p>
            </div>
        </div>
    );
}

export default Course;
