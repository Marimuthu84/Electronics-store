import React from "react";
import Slider from "react-slick";
import "../component/CardSlider.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../images/house1.jpg";
import image2 from "../images/house2.jpg";
import image3 from "../images/house3.jpg";
import image4 from "../images/house4.jpg";
import image5 from "../images/house5.jpg";
import image6 from "../images/house6.jpg";
import { Button } from "bootstrap";

const CardSlide = () => {
    const cards = [
        {type:"2 BHK",location:"Chennai,Tamilnadu",price:"₹20L",img:image1},
        {type:"1 BHK",location:"Tenkasi,Tamilnadu",price:"₹14L",img:image2},
        {type:"2 BHK",location:"Salem,Tamilnadu",price:"₹25L",img:image3},
        {type:"3 BHK",location:"Tirunelveli,Tamilnadu",price:"₹45L",img:image4},
        {type:"1 BHK",location:"Karur,Tamilnadu",price:"₹8L",img:image5},
        {type:"2 BHK",location:"Erode,Tamilnadu",price:"₹35L",img:image6},

    ];
    const settings = {
        dots:true,
        infinite:true,
        speed: 500,
        slidesToShow: 3,
        SlidesToScroll: 1,
        arrows: false,
        autoplay:false,
        responsive:[
            {
                breakpoint:768,
                settings:{
                    slideToShow:1
                }
            },
            {
                breakpoint:992,
                settings:{
                    slideToShow: 2
                }
            }
        ]
    };

    return(
        <div className="container">
            <Slider {...settings}>
                {cards.map((card,index) => (
                    <div key={index} className="card">
                        
                            <div className="card-body">
                                <img src={card.img} alt="images" width={100} height={100}/>
                                 <div className="content">
                                <h4 className="card-type">{card.type}</h4>
                                <h5 className="card-price">{card.price}</h5>
                                <p className="card-location">{card.location}</p>
                                <button>Buy Now</button>
                                </div>
                            </div>
                             
                             
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CardSlide;