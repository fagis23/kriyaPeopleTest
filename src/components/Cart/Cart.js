import React from "react";
import Button from "../Button/Button";

const Cart = ({ cart, page, decrementItemInCart, incrementItemInCart }) => {
  return (
    <div className="card" key={cart.id}>
      <div className="card-id">
        <p>{cart.id}</p>
      </div>
      <div className="card-title">
        <p>{cart.title}</p>
      </div>
      <div className="card-count">
        <p>{cart.count}</p>
      </div>
      {page !== "checkout" ? (
        <div className="card-action">
          <Button
            value="-"
            style={{ marginRight: 2 }}
            onClick={() => decrementItemInCart(cart.id)}
          />
          <Button value="+" onClick={() => incrementItemInCart(cart.id)} />
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
