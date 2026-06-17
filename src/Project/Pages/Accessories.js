import React, { useState } from "react";
import "..//Pages/Laptop.css";
import { FaShoppingCart, FaFilter } from "react-icons/fa";

function Accessories() {
  const [filter, setFilter] = useState("all");

  const Accessories = [
    {
      id: 1,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/keyboard/multi-device-keyboard/u/i/x/k120-ab3c9aa-hp-original-imahmkxgtp5qvqwy.jpeg?q=70",
      name: "HP K120",
      spec: "Wired • Black",
      price: 646,
    },
    {
      id: 2,
      image: "https://rukminim2.flixcart.com/image/612/612/xif0q/keyboard/desktop-keyboard/c/y/n/kb216-multimedia-keyboard-with-usb-interface-plunger-keys-original-imahmc47wffjyfx9.jpeg?q=70",
      name: "DELL KB216",
      spec: "Wired • Black",
      price: 579,
    },
    {
      id: 3,
      image: "https://rukminim1.flixcart.com/image/1366/1366/xif0q/keyboard/multi-device-keyboard/b/w/j/bubble-2-4-ghz-bluetooth-5-0-connectivity-noiseless-experience-original-imahe25pygvgatbz.jpeg?q=90",
      name: "Portronics Bubble",
      spec: "Wireless • White",
      price: 969,
    },
    {
      id: 4,
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXK63?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=OWdaNmFWcWZFa25XbmFmQnV4cU1rZ2tuVHYzMERCZURia3c5SzJFOTlPaTY2RUlBaWZlQVRESlNWbTZyWXZnU1U5QlNTN2NiMis1TDZnci9mOGcvc0E",
      name:"Magic Mouse",
      spec: "USB-C • Black",
      price: 9500,
    },
    {
      id: 5,
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXCL3?wid=890&hei=890&fmt=jpeg&qlt=90&.v=ZHpFWktFbWJldTh5MlZwQ2p3YVJNWXExblZJSGFXSFVPMUE2c2RxMy8rSmZ3QzFjZmJJbnZTNkJaSUZpamY3dzUwcXdLakhwcU9qQUI3ZU84eWxHcnc",
      name: "Magic Keyboard",
      spec: "USB-C • White",
      price: 9500,
    },
    {
      id: 6,
      image: "https://rukminim1.flixcart.com/image/1366/1366/xif0q/headphone/t/w/k/-original-imahcmy53mkee3wf.jpeg?q=90",
      name: "Realme Buds Air 7 Pro",
      spec: "48HRs • Racing Green",
      price: 5499,
    },
    {
      id: 7,
      image: "https://rukminim1.flixcart.com/image/1366/1366/xif0q/mouse/x/n/r/130-wireless-lenovo-original-imahg97wtzgmamfk.jpeg?q=90",
      name: "Lenovo 130",
      spec: "Wireless • Black",
      price: 599,
    },
    {
      id: 8,
      image: "https://rukminim1.flixcart.com/image/1366/1366/xif0q/mouse/u/w/a/-original-imahdaeyngnhqffw.jpeg?q=90",
      name: "Lenovo 600 BT",
      spec: "Wireless • Gray",
      price: 1549,
    },
    {
      id: 9,
      image: "https://rukminim1.flixcart.com/image/1366/1366/xif0q/mouse/m/2/v/groot-zebronics-original-imahmdf3pvawrywe.jpeg?q=90",
      name: "Zebronics",
      spec: "Wireless • Green",
      price: 349,
    },
    {
      id: 10,
      image: "https://rukminim1.flixcart.com/image/1366/1366/xif0q/mouse/k/m/r/-original-imahjk28bnuzf7jc.jpeg?q=90",
      name: "Acer ZC A01SI",
      spec: "Wireless • Blue",
      price: 449,
    },
    {
      id: 11,
      image: "https://rukminim1.flixcart.com/image/1366/1366/xif0q/power-bank/q/t/c/-original-imahdq4dfkanz5gs.jpeg?q=90",
      name: "Xiomi PowerBank",
      spec: "20000mAh • Black",
      price: 1899,
    },
    {
      id: 12,
      image: "https://rukminim1.flixcart.com/image/1366/1366/xif0q/laptop-stand/h/x/n/170-zeb-ns-1500-laptop-stand-with-7-angles-adjustable-tabletop-original-imahmsqhqyuyhmdf.jpeg?q=90",
      name: "ZEB NS-1500",
      spec: "7 Angles • black",
      price: 249,
    },
    {
      id: 13,
      image: "https://rukminim1.flixcart.com/image/1366/1366/xif0q/laptop-stand/j/m/m/820-zeb-ns5000-zebronics-original-imahmsqdtmgdvzwt.jpeg?q=90",
      name: "ZEB NS5000",
      spec: "7 Angles • black",
      price: 1299,
    },
    {
      id: 14,
      image: "https://rukminim1.flixcart.com/image/1366/1366/xif0q/laptop-stand/c/a/w/1463-ergo-hi-rise-360-metal-15-6-inches-amkette-original-imahjneykcgzazse.jpeg?q=90",
      name: "AMKETTE Ergo",
      spec: "360 Deg • White",
      price: 899,
    },
    {
      id: 15,
      image: "https://rukminim1.flixcart.com/image/1366/1366/xif0q/headphone/s/5/8/-original-imah5vq5mtgqdpek.jpeg?q=90",
      name: "Boat Airdopes",
      spec: "120HR • Blazing Comet",
      price: 1999,
    },
    {
      id: 16,
      image: "https://rukminim1.flixcart.com/image/1366/1366/xif0q/headphone/d/k/0/-original-imahgnf4uqcmqhnb.jpeg?q=90",
      name: "Boat Rockers",
      spec: "40HR • Cosmic Green",
      price: 1399,
    },
  ];

  const filteredAccessories = Accessories.filter((Accessorie) => {
    if (filter === "all") return true;
    if (filter === "below499") return Accessorie.price < 500;
    if(filter === "500to1000")
        return Accessorie.price >= 500 && Accessorie.price < 1000;
    if (filter === "1000to5000")
      return Accessorie.price >= 1000 && Accessorie.price <= 5000;
    if(filter === "above5000")
        return Accessorie.price > 5000;
  });

  return (
    <>
      <div className="filter-section">
        <FaFilter />
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All Prices</option>
          <option value="below499">Below ₹499</option>
          <option value="500to1000">₹500 - ₹1000</option>
          <option value="1000to5000">₹1000 - ₹5000</option>
          <option value="above5000">Above ₹5,000</option>
        </select>
      </div>

      <div className="box">
        {filteredAccessories.map((Accessorie) => (
          <div className="card" key={Accessorie.id}>
            <img src={Accessorie.image} alt={Accessorie.name} />

            <div className="card-body">
              <h5>{Accessorie.name}</h5>
              <p>{Accessorie.spec}</p>

              <div className="price-cart">
                <h3>₹{Accessorie.price.toLocaleString("en-IN")}</h3>

                <button className="cart-btn">
                  <FaShoppingCart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Accessories;