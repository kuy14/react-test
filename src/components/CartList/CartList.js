import React from "react";
import "./CartList.css";

const cartList = () => (
  <div className="CartList">
    <span className="cartList-label">Current Cart</span>
    <div className="cartList-card"></div>
    <div className="cartList-cartInfo">
      <button className="btn-empty">Empty Cart</button>
      <span className="price-label">Total Price : 150.000</span>
    </div>
  </div>
);

export default cartList;
