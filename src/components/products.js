import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts } from "../store/actions/productsAction";

class products extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    const { products } = this.props.products;
    console.log(this.props.products);

    return <div></div>;
  }
}

const mapStateToProps = (state) => ({ products: state.products });

export default connect(mapStateToProps, { getProducts })(products);
