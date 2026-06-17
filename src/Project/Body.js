import React from "react";
import "../Project/Body.css"
import Mobile from "../Project-image/mobile.jpg";
import Access from "../Project-image/accesorie.jpg";
import Laptop from "../Project-image/laptops.jpg";
import Container from "react-bootstrap/Container";
import laptop from "../Project-image/laptop7.jpg"
import { FaArrowRight } from "react-icons/fa";

function Content(){
    return(
        <>
            <Container className="content">
                <img src={laptop} alt="Laptops" />
                <div className="description">
                    <h3 id="one">MacBook Pro 16</h3>
                    <h1 id="two">Fast runs in the family.</h1>
                    <h2 id="three">Now with M5,M5Pro and M5 Max.</h2>
                    <p>Our most advanced series of chips ever built for a pro laptop. Each chip in the M5 family delivers phenomenal single- and multithreaded CPU performance and faster unified memory — giving you the kind of speed you’ve never thought possible. The SSD storage is up to twice as fast as before.</p>
                    <button>Shop Now</button>
                </div>
            </Container>
            <Container className="categories">
                <div className="heading">
                    <h2>Explore Categories</h2>
                    <a href="#">view all <FaArrowRight size={15}/></a>
                </div>
                <div className="categories-explore">
                 <div className="laptop-card">
                <img src={Laptop} alt="categories" width={600} height={600} />
                <h3 id="laptop">Laptops</h3>
                </div>
                <div className="access">
                <div className="mobile-card">
                <img src={Mobile} alt="categories" width={430} height={320} />
                <h3 id="mobile">Mobiles</h3>
                </div>
                <div className="access-card">
                 <img src={Access} alt="categories" width={430} height={250} />
                 <h4 id="accesso">Accessories</h4>
                 </div>
                 </div>
            </div>
                 <div className="center">
                       <h2>New Arrivals</h2>
                        <p>Discover the latest additions to our curated collections of world-class electronics.</p>
                 </div>
            </Container>
        </>
    );

}
export default Content;