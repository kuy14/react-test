import React, { Component } from "react";

import CartCounter from "../../components/CartCounter/CartCounter";
import CartList from "../../components/CartList/CartList";
import Catalogue from "../../components/Catalogue/Catalogue";

class Product extends Component {
  render() {
    return (
      <div>
        <CartCounter />
        <CartList />
        <Catalogue />
      </div>
    );
  }
}
export default Product;
