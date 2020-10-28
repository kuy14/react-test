import React, { Component } from "react";
import "./CartCounter.css";
import cart from "../../assets/icons/cart.svg";

class cartCounter extends Component {
  render() {
    return (
      <div className="CartCounter">
        <span className="cartLabel">
          <img src={cart} width="20"></img> Cart (4)
        </span>
      </div>
    );
  }
}

export default cartCounter;
