import React, { Component } from "react";
import "./Catalogue.css";
import { connect } from "react-redux";
import { getProducts } from "../../store/actions/productsAction";
import products from "../products";

class catalogue extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    const { products } = this.props.products;
    console.log(this.props.products);
    return (
      <div className="catalogue">
        <span className="catalogue-label">Catalogue</span>
        <div className="row">
          {products.map((u) => (
            <div className="column">
              <div className="card" key={u.productId}>
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

export default connect(mapStateToProps, { getProducts })(catalogue);
