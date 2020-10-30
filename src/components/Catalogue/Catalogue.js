import React, { useState, useEffect } from "react";
import "./Catalogue.css";
import { getProductsAsync } from "../../store/actions/productsAction";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

const Catalogue = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(getProductsAsync());
  }, []);

  return (
    <div className="catalogue">
      <span className="catalogue-label">Catalogue</span>

      <div className="row">
        {products.map((u) => (
          <div className="column" key={u.productId}>
            <div
              className="card"
              onClick={() =>
                dispatch({
                  type: "ADD_CART",
                  payload: {
                    productId: u.productId,
                    productName: u.productName,
                    productPrice: u.productPrice,
                    productImage: u.productImage,
                    items: 1,
                  },
                })
              }
            >
              <img
                src={u.productImage}
                className="card-image"
                alt="Product"
              ></img>
              <h1 className="product-title">{u.productName}</h1>
              <h3 className="product-price">Rp. {u.productPrice}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
