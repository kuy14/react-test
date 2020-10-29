import React, { Component } from "react";
import "./CartList.css";
import { connect } from "react-redux";

class cartList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPrice: 0,
    };
  }

  render() {
    const carts = this.props.cart;
    var totalPrice = 0;
    return (
      <div className="CartList">
        <span className="cartList-label">Current Cart</span>
        <div className="cartList-cardContainer">
          {carts.map((c) => (
            <div className="cartList-card" key={c.productId}>
              <span className="cardList-title">
                {c.productName} ({c.items} Item)
              </span>
              <span className="cardList-price">
                {(this.state.totalPrice = parseInt(c.productPrice) * c.items)}
              </span>
              <hr />
            </div>
          ))}
        </div>
        <div className="cartList-cartInfo">
          <button className="btn-empty">Empty Cart</button>
          <span className="price-label">Total Price : {totalPrice}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.products.carts,
  };
};

export default connect(mapStateToProps)(cartList);
