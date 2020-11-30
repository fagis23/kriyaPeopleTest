import React from "react";
import Button from "../Button/Button";

const Product = ({ product, setToCart }) => {
  return (
    <div className="card" key={product.id}>
      <div className="card-id">
        <p>{product.id}</p>
      </div>
      <div className="card-title">
        <p>{product.title}</p>
      </div>
      <div className="card-action">
        {product.inCart ? (
          <h6
            style={{
              color: "lightcoral",
              background: "lightgray",
              padding: "3px 6px",
              borderRadius: 10,
              cursor: "not-allowed",
            }}
          >
            In cart
          </h6>
        ) : (
          <Button value="+" onClick={() => setToCart(product)} />
        )}
      </div>
    </div>
  );
};

export default Product;
