import React, { Component } from "react";
import { EMPTY_CART } from "../../store/types";
import "./CartList.css";
import { connect } from "react-redux";

class cartList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     totalPrice: 0,
  //   };
  // }

  render() {
    const carts = this.props.cart;
    return (
      <div className="CartList">
        <span className="cartList-label">Current Cart</span>
        <div className="cartList-cardContainer">
          <div>
            {carts.length === 0 ? (
              <div>
                <div className="cartList-card">
                  <span className="cardList-title">Keranjang Kosong</span>
                </div>
              </div>
            ) : (
              <div>
                {carts.map((c) => (
                  <div className="cartList-card" key={c.productId}>
                    <span className="cardList-title">
                      {c.productName} ({c.items} Item)
                    </span>
                    <span className="cardList-price">
                      {parseInt(c.productPrice) * c.items}
                    </span>
                    <hr />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="cartList-cartInfo">
          <button
            className="btn-empty"
            onClick={() => this.props.onEmptyCart()}
          >
            Empty Cart
          </button>
          <span className="price-label">
            Total Price : {this.props.totalPrice}
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.products.carts,
    totalPrice: state.products.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onEmptyCart: () =>
      dispatch({
        type: EMPTY_CART,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(cartList);
