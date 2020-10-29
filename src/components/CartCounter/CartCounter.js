import React, { Component } from "react";
import "./CartCounter.css";
import cartImage from "../../assets/icons/cart.svg";
import { connect } from "react-redux";

class cartCounter extends Component {
  render() {
    const totalCarts = this.props.totalCarts;
    return (
      <div className="CartCounter">
        <span className="cartLabel">
          <img src={cartImage} width="18" alt="cart"></img> Cart ({totalCarts})
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    totalCarts: state.products.totalCarts,
  };
};

export default connect(mapStateToProps)(cartCounter);
