import React, { useState } from "react";
import "../Cards.css";
import { FaShoppingCart, FaFilter } from "react-icons/fa";

function Mobile() {
  const [filter, setFilter] = useState("all");

  const mobiles = [
    {
      id: 1,
      image: "https://i.pinimg.com/736x/83/45/f8/8345f8b3368adf245b5d0f833f9fc5cf.jpg",
      name: "iPhone 17 Pro Max",
      spec: "256GB • Gray",
      price: 119999,
    },
    {
      id: 2,
      image: "https://i.pinimg.com/736x/ad/8e/da/ad8eda28a281ffc7720ad7c82e13620e.jpg",
      name: "Samsung S25 Ultra",
      spec: "256GB • Black",
      price: 99999,
    },
    {
      id: 3,
      image: "data:image/jpeg;base64,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",
      name: "OnePlus 13",
      spec: "256GB • Green",
      price: 69999,
    },
    {
      id: 4,
      image: "data:image/jpeg;base64,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EREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH/9k=",
      name: "Moto Edge 70 Fusion",
      spec: "256GB • Green",
      price: 119999,
    },
    {
      id: 5,
      image: "https://media-ik.croma.com/Croma%20Assets/Communication/Mobiles/Images/322005_0_YLwQFh4nk.png?updatedAt=1773298701787&tr=w-600",
      name: "Nothing 4a Pro",
      spec: "256GB • Black",
      price: 99999,
    },
    {
      id: 6,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStllt_DwbR5tlU5ryv50TD67BKkhxThmSkoA&s",
      name: "Google Pixel 10 Pro",
      spec: "256GB • Gray",
      price: 69999,
    },
    {
      id: 7,
      image: "https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/common/mkt/plp-x/phones/spring-2025-huawei-innovative-product-launch/reason/huawei-phones-design.jpg",
      name: "Huawei Mate XT",
      spec: "256GB • Black",
      price: 299999,
    },
    {
      id: 8,
      image: "https://www.designinfo.in/wp-content/uploads/2022/09/Vivo-X300-Summit-Red-12GB-RAM-256GB-Storage-1-485x485.webp",
      name: "Vivo X300",
      spec: "256GB • Green",
      price: 69999,
    },
    {
      id: 9,
      image: "https://m.media-amazon.com/images/I/41q9AzxfTpL._SY300_SX300_QL70_FMwebp_.jpg",
      name: "Redmi A7 Pro 5G",
      spec: "128GB • Sunset Orange",
      price: 13999,
    },
    {
      id: 10,
      image: "https://m.media-amazon.com/images/I/41f2ywIMrRL._SY300_SX300_QL70_FMwebp_.jpg",
      name: "Realme Narzo Power 5G",
      spec: "256GB • Black",
      price: 27999,
    },
    {
      id: 11,
      image: "https://m.media-amazon.com/images/I/41p5PSEky5L._SY300_SX300_QL70_FMwebp_.jpg",
      name: "IQOO Neo 10",
      spec: "256GB • White",
      price: 37999,
    },
    {
      id: 12,
      image: "https://m.media-amazon.com/images/I/81pLVldevuL._SX569_.jpg",
      name: "Redmi note 15 5G",
      spec: "256GB • Black",
      price: 28999,
    },
    {
      id: 13,
      image: "https://motorolain.vtexassets.com/arquivos/ids/160755-800-auto?width=800&height=auto&aspect=true",
      name: "Moto G96 5G",
      spec: "128GB • Phantom Blue",
      price: 18999,
    },
    {
      id: 14,
      image: "https://images.samsung.com/is/image/samsung/p6pim/in/sm-m076blvbins/gallery/in-galaxy-m17e-5g-sm-m076-583484-sm-m076blvbins-551466000?$1164_776_PNG$",
      name: "Galaxy M17e 5G",
      spec: "128GB • Vibe Violet",
      price: 17499,
    },
    {
      id: 15,
      image: "https://i03.appmifile.com/343_item_in/21/01/2025/57963bb57ad1a92735070525f0350b85.png?thumb=1&f=webp&q=85",
      name: "Redmi Note 14 5G",
      spec: "128GB • Mystique White",
      price: 16499,
    },
    {
      id: 16,
      image: "https://rukminim2.flixcart.com/image/1366/1366/xif0q/mobile/k/g/n/-original-imahmqgabnzytsgk.jpeg?q=90",
      name: "Redmi A7 Pro 5G",
      spec: "128GB • Sunset Orange",
      price: 13999,
    },
  ];

  const filteredMobiles = mobiles.filter((mobile) => {
    if (filter === "all") return true;
    if (filter === "below19999") return mobile.price < 20000;
    if(filter === "20000to50000")
        return mobile.price >= 20000 && mobile.price < 50000;
    if (filter === "below70000") return mobile.price < 70000;
    if (filter === "70000to100000")
      return mobile.price >= 70000 && mobile.price <= 100000;
    if (filter === "above100000") return mobile.price > 100000;
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
        {filteredMobiles.map((mobile) => (
          <div className="card" key={mobile.id}>
            <img src={mobile.image} alt={mobile.name} />

            <div className="card-body">
              <h5>{mobile.name}</h5>
              <p>{mobile.spec}</p>

              <div className="price-cart">
                <h3>₹{mobile.price.toLocaleString("en-IN")}</h3>

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

export default Mobile;