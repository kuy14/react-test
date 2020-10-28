import React, { Component } from "react";
import "./Catalogue.css";
import { connect } from "react-redux";
import { getProducts } from "../../store/actions/productsAction";
import { bindActionCreators } from "redux";

class catalogue extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    const { products } = this.props.products;

    return (
      <div className="catalogue">
        <span className="catalogue-label">Catalogue</span>
        <div className="row">
          {products.map((u) => (
            <div className="column" key={u.productId}>
              <div
                className="card"
                onClick={() =>
                  this.props.onAddCart(
                    u.productId,
                    u.productName,
                    u.productPrice,
                    u.productImage
                  )
                }
              >
                <img
                  src={u.productImage}
                  className="card-image"
                  alt="Product Image"
                ></img>
                <h1>{u.productName}</h1>
                <h3>{u.productPrice}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ products: state.products });

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: bindActionCreators(getProducts, dispatch),
    onAddCart: (id, name, price, image) =>
      dispatch({
        type: "ADD_CART",
        payload: {
          productId: id,
          productName: name,
          productPrice: price,
          productImage: image,
          items: 1,
        },
      }),
  };
};
// single object
export default connect(mapStateToProps, mapDispatchToProps)(catalogue);
