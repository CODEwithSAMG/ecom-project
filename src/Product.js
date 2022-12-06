import React, { useState } from "react";
import product_card from "./productDatas";

const Product = () => {
  const [buy, setBuy] = useState();
  const onBuy = (e) => {
    setBuy();
    console.log(e.target.val);
  };
  const mystyle = {
    color: "red",
    fontFamily: "Arial",
    fontSize: "2em",
    // fontWeight: 400,
  };
  const listItems = product_card.map((val) => (
    <div className=" card" key={val.id}>
      <div className="card-img">
        <img src={val.thumb} alt="image" />
      </div>
      <div className="card-header">
        <h3 style={{ textAlign: "center", paddingTop: 20 }}>
          {" "}
          {val.product_name}
        </h3>
        <p style={mystyle}>{val.description}</p>
        <ul style={{ display: "flex", flexDirection: "column" }}>
          <li>{val.desc2}</li>
          <li>{val.desc3}</li>
          <li>{val.desc4}</li>
          <li>{val.desc5}</li>
        </ul>
        <h4 id="price">{val.price}</h4>
        <button onClick={onBuy} id="btn" className="buy-now-btn">
          {" "}
          Buy Now{" "}
        </button>
      </div>
    </div>
  ));
  return <div className="main-content">{listItems}</div>;
};

export default Product;
