import React from "react";
import "..//Project/Cards.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingCart } from "react-icons/fa";

function ProductCard() {
  const cards = [
  {
    id: 1,
    image: "https://i.pinimg.com/736x/83/45/f8/8345f8b3368adf245b5d0f833f9fc5cf.jpg",
    name: "iPhone 17 Pro Max",
    spec: "256GB • Gray",
    price: "₹1,19,999",
  },
  {
    id: 2,
    image: "https://i.pinimg.com/1200x/96/b8/19/96b819a2057454cd507198c2a60557e3.jpg",
    name: "Dell XPS 15",
    spec: "Intel Core Ultra 7",
    price: "₹89,999",
  },
  {
    id: 3,
    image: "https://i.pinimg.com/736x/8d/ec/3a/8dec3a840037c7335a8144b0c9f82de2.jpg",
    name: "Sony WH-1000XM6",
    spec: "Wireless Noise Cancelling",
    price: "₹13,999",
  },
  {
    id: 4,
    image: "https://i.pinimg.com/736x/68/40/2c/68402ccf1d66ea3134acf6fca0ab8f22.jpg",
    name: "Apple Watch Ultra 3",
    spec: "49mm • GPS + Cellular",
    price: "₹17,999",
  },
];


  return (
    <div className="box">
      {cards.map((card) => (
        <div className="card" key={card.id}>
          <img src={card.image} alt={card.name} />
          <div className="card-body">
            <h5>{card.name}</h5>
            <p>{card.spec}</p>
            <div className="price-cart">
            <h3>{card.price}</h3>
            <button className="cart-btn">
                <FaShoppingCart />
            </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;