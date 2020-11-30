import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../context/Context";

import ProductComponent from "../components/Product/Product";
import CartComponent from "../components/Cart/Cart";

const Product = () => {
  const context = useContext(Context);

  const {
    products,
    loading,
    carts,
    subTotals,
    setAllProduct,
    setToCart,
    incrementItemInCart,
    decrementItemInCart,
  } = context;

  useEffect(() => {
    setAllProduct();
  }, []);

  return (
    <div className="product">
      <div className="header">
        <h1>Market Product</h1>
      </div>
      <div className="product-container">
        <div className="list-items">
          <div className="title">
            <p>List Product 📋</p>
          </div>
          <div className="list-card">
            {loading ? (
              <p>Loading...</p>
            ) : products.length === 0 ? (
              <p>Product is empty</p>
            ) : (
              products.map((product, index) => {
                return (
                  <ProductComponent
                    key={index}
                    product={product}
                    setToCart={setToCart}
                  />
                );
              })
            )}
          </div>
        </div>
        <div className="list-checkout">
          <div className="checkout-title">
            <p>Checkout {carts.length !== 0 && `(${carts.length}) items`} 🛒</p>
            {carts.length !== 0 && <Link to="/checkout">Checkout</Link>}
          </div>
          <div className="checkout-header">
            <p>Id</p>
            <p>Title</p>
            <p>Count</p>
            <p>Action</p>
          </div>
          <div className="checkout-card">
            {carts.length === 0 ? (
              <p
                style={{
                  borderBottom: "1px solid black",
                  padding: 10,
                }}
              >
                You Have No Item 😥
              </p>
            ) : (
              carts.map((cart, index) => {
                return (
                  <CartComponent
                    key={index}
                    cart={cart}
                    incrementItemInCart={incrementItemInCart}
                    decrementItemInCart={decrementItemInCart}
                  />
                );
              })
            )}
          </div>
          <div className="checkout-total">
            <p>Total</p>
            <p>{subTotals}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
