import React, { useState } from "react";
import "..//Pages/Laptop.css";
import { FaShoppingCart, FaFilter } from "react-icons/fa";

function Laptop() {
  const [filter, setFilter] = useState("all");

  const laptops = [
    {
      id: 1,
      image: "https://dellstatic.luroconnect.com/media/catalog/product/cache/74ae05ef3745aec30d7f5a287debd7f5/l/a/laptop-15-d15260-nt-gray-gallery-1_copy.png",
      name: "Dell 15",
      spec: "512GB • 16GB",
      price: 85490,
    },
    {
      id: 2,
      image: "https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/h/p/hp-15-gaming-laptop-roku-opihr-mica-performanceblue-front.png",
      name: "HP Victus 39.6 cm",
      spec: "512GB • 16GB",
      price: 143999,
    },
    {
      id: 3,
      image: "https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/h/p/hp-omnibook-7-14-inch-laptop-ai-pc-agusta-meteorsilver-front.png",
      name: "HP OmniBook 7",
      spec: "1TB • 32GB",
      price: 184999,
    },
    {
      id: 4,
      image: "https://dellstatic.luroconnect.com/media/catalog/product/cache/74ae05ef3745aec30d7f5a287debd7f5/n/o/notebook-db06250t-bl-copilot-pc-small_new_1.png",
      name:"Dell 16 Plus",
      spec: "512GB • 16GB",
      price: 104290,
    },
    {
      id: 5,
      image: "https://p1-ofp.static.pub/medias/26843014995_IPS315IRH10LGBL_202411251053371770744012158.png?width=584&height=584",
      name: "IdeaPad Slim 3i",
      spec: "512GB • 16GB",
      price: 73490,
    },
    {
      id: 6,
      image: "https://p1-ofp.static.pub/medias/27686515910_processed_6dc51ec863ff4285b7f99d72bb749071_202510200458081768856598010.png?width=584&height=584",
      name: "Lenovo ThinkPad 16",
      spec: "512GB • 16GB",
      price: 77991,
    },
    {
      id: 7,
      image: "https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/h/p/hp-fortis-14-inch-g10-chromebook-front.png",
      name: "HP G10 ChromeBook",
      spec: "64GB • 8GB",
      price: 31999,
    },
    {
      id: 8,
      image: "https://dlcdnwebimgs.asus.com/gain/c7b8fccf-4b77-40e9-b53f-b22da9e8c2ac/w800/fwebp",
      name: "ASUS VivoBook 14",
      spec: "512GB • 16GB",
      price: 57990,
    },
    {
      id: 9,
      image: "https://dlcdnwebimgs.asus.com/gain/14c6be57-e7d1-462c-a109-4f93c353d93c/w800/fwebp",
      name: "ASUS ZenBook A14",
      spec: "1TB • 32GB",
      price: 86690,
    },
    {
      id: 10,
      image: "https://rukminim2.flixcart.com/image/1366/1366/xif0q/computer/6/m/2/15igl05-thin-and-light-laptop-lenovo-original-imagsf3ydxfwcuzz.jpeg?q=90",
      name: "Lenovo IdeaPad Slim 3",
      spec: "256GB • 8GB",
      price: 27990,
    },
    {
      id: 11,
      image: "https://rukminim1.flixcart.com/image/1366/1366/xif0q/computer/6/d/d/-original-imahg5fxhhzc5dre.jpeg?q=90",
      name: "Acer One",
      spec: "512GB • 8GB",
      price: 19990,
    },
    {
      id: 12,
      image: "https://rukminim1.flixcart.com/image/1366/1366/xif0q/computer/b/1/f/-original-imahg4uuqzzvgjnz.jpeg?q=90",
      name: "Acer Aspire 3",
      spec: "256GB • 2GB",
      price: 16990,
    },
    {
      id: 13,
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/macbook-neo-digitalmat-gallery-2-202603?wid=728&hei=666&fmt=jpeg&qlt=90&.v=NC96emhJemczTlpnY1kzRXYvV1dEVHBhZEVDYXdNalJLdkllSGFmNnBVVDJ1Zk55MjBoaG1LbldpV1JIK0hPYW5QZzJFYTM2YWJROS9meXA5Z09BMUtMalVvbmRiUjhIaGRVMlJ3Y1BOc05pRkpBNEp1SjJ3TUlYM3lGVEFJZ2M",
      name: "MacBook Neo",
      spec: "256GB • 8GB",
      price: 69990,
    },
    {
      id: 14,
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/macbook-air-13-digitalmat-gallery-1-202503?wid=728&hei=666&fmt=png-alpha&.v=RWZDcE1Pa2MvREpxR2hwendCZFpRa2EvQmI5ZjZseVhPSEJZVkYxZ09JdFpUdXE4MkhYYjRLTVptRHE3NGNZdHhaVXN2UmVLZWxyY01GTDZmcDYxbitZbnd2dEloRUI0QkxmQVJESllzWlN5ekw2b3VPdnZLWU14ZXc2aDkvRXI",
      name: "MacBook Air 13",
      spec: "512GB • 16GB",
      price: 119990,
    },
    {
      id: 15,
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mbp-14-digitalmat-gallery-1-202410?wid=728&hei=666&fmt=png-alpha&.v=dmVFbEEyUXJ6Q0hEd1FjMFY3bE5FczNWK01TMHBhR0pZcm42OHQ2ODBjVVZYRUFzTnU5dXpMeUpXTHdIdkp5VDRob044alBIMUhjRGJwTW1yRE1oUG9oQ20zUjdkYWFQM0VDcG9EZ0J2dDMrNmVjbmk5c1V4VVk2VEt3TGcxekg",
      name: "MacBook Pro 14",
      spec: "1TB • 16GB",
      price: 189990,
    },
    {
      id: 16,
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/mbp-16-digitalmat-gallery-1-202410?wid=728&hei=666&fmt=jpeg&qlt=90&.v=MEZVZW13NFE5V2Zqa2RkTS8yRndVTTNWK01TMHBhR0pZcm42OHQ2ODBjVVZYRUFzTnU5dXpMeUpXTHdIdkp5VE1lSHdvOTh6OTZzV3lxaDVoZmhFbGVaZU1aODlOQjRhUGhEVUlmOWhBNE9jMjlVY0l1R3ArenAzSUxNRFZhcXY",
      name: "MacBook Pro 16",
      spec: "1TB • 24GB",
      price: 299999,
    },
  ];

  const filteredLaptops = laptops.filter((laptop) => {
    if (filter === "all") return true;
    if (filter === "below19999") return laptop.price < 20000;
    if(filter === "20000to50000")
        return laptop.price >= 20000 && laptop.price < 50000;
    if (filter === "below70000") return laptop.price < 70000;
    if (filter === "70000to100000")
      return laptop.price >= 70000 && laptop.price <= 100000;
    if (filter === "above100000") return laptop.price > 100000;
    return true;
  });

  return (
    <>
      <div className="filter-section">
        <FaFilter />
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All Prices</option>
          <option value="below19999">Below ₹19999</option>
          <option value="20000to50000">₹20000 - ₹50000</option>
          <option value="below70000">Below ₹70,000</option>
          <option value="70000to100000">₹70,000 - ₹1,00,000</option>
          <option value="above100000">Above ₹1,00,000</option>
        </select>
      </div>

      <div className="box">
        {filteredLaptops.map((laptop) => (
          <div className="card" key={laptop.id}>
            <img src={laptop.image} alt={laptop.name} />

            <div className="card-body">
              <h5>{laptop.name}</h5>
              <p>{laptop.spec}</p>

              <div className="price-cart">
                <h3>₹{laptop.price.toLocaleString("en-IN")}</h3>

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

export default Laptop;