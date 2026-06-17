import React from "react";
import style from "../component/Cards.css";
function Cards(){
    const cards =[
        {
            id:1,
            title:"Web development",
            desc:"Learn modern UI and UX and responsive website design",
            image:
            "https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww"
        },
        {
            id:2,
            title:"JavaScript Developer",
            desc:"They builds, tests, and maintains dynamic, interactive websites",
            image:"https://media.istockphoto.com/id/2272559795/photo/young-latin-male-software-developer-working-late-analyzing-information-and-code-on-multiple.webp?a=1&b=1&s=612x612&w=0&k=20&c=oYXt7XZ-T20rUlfAlurSdOvn99xdPlIA3TPqtA81O20="
        },
        {
            id:3,
            title:"AI Engineer",
            desc:"AI engineers build smart systems using coding, data handling, and ML.",
            image:"https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QUklMjBFbmdpbmVlcnxlbnwwfHwwfHx8MA%3D%3D"
        }
    ]
    return(
        <div className="container">
         {cards.map((card) => (
            <div className="card" key={card.id}>
              <img src={card.image} alt={card.title}/>
              <div className="card-container">
                 <h2>{card.title}</h2>
                 <p>{card.desc}</p>
                 <button>Read more</button>
              </div>
            </div>
         ))}
        </div>
    )
}
export default Cards;