import React, { useState } from "react";
import Course from "./Course";
import "../practice/Example.css";
import image1 from "../images/realme.jpg";
import image2 from "../images/nothing.jpg";
import image3 from "../images/pixel.jpg";
import image4 from "../images/samsung.jpg";

function Example(){
    
    const [cards,setCards] = useState([
        {id:1, image:image1,company: "Real Me", price:1000},
        {id:2,image:image2,company: "Nothing", price:800},
        {id:3,image:image3,company: "Google", price:1200},
        {id:4,image:image4,company: "Samsung", price:900}
    ]);
    
    function handleDelete(id){
        const newCards = cards.filter((card) => card.id != id);
        setCards(newCards);
    }


    cards.sort((x,y) => y.price - x.price);


    const cardsList = cards.map((card) => <Course key={card.id} image={card.image} company={card.company} price={card.price} delete={handleDelete} id={card.id}/>)
    return(
    
        <div className="container">
            {cardsList}
        </div>
    
    );
}
export default Example;