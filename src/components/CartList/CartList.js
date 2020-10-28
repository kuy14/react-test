import React, { Component } from "react";
import "./CartList.css";
import { connect } from "react-redux";

class cartList extends Component {
  render() {
    return (
      <div className="CartList">
        <span className="cartList-label">Current Cart</span>
        <div className="cartList-cardContainer">
          <div className="cartList-card">
            <span className="cardList-title">Baju</span>
            <span className="cardList-price">Rp. 150.000</span>
            <hr />
          </div>
        </div>
        <div className="cartList-cartInfo">
          <button className="btn-empty">Empty Cart</button>
          <span className="price-label">Total Price : 150.000</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.carts,
  };
};

export default connect(mapStateToProps)(cartList);
