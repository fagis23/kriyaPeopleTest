import { useContext } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";
import Cart from "../components/Cart/Cart";

const Checkout = ({ history }) => {
  const context = useContext(Context);

  const { carts, subTotals, checkoutCart } = context;

  return (
    <div className="checkout-page">
      <div className="header">
        <h1>Checkout Page</h1>
      </div>

      {carts.length === 0 ? (
        <p>
          You Have 0 Item in your cart, go too <Link to="/">Product</Link>
        </p>
      ) : (
        <div className="carts">
          <div className="checkout-header">
            <p>Id</p>
            <p>Title</p>
            <p>Count</p>
          </div>
          <div className="checkout-card">
            {carts.map(cart => {
              return <Cart key={cart.id} cart={cart} page="checkout" />;
            })}
          </div>
          <div className="checkout-total">
            <p>Total</p>
            <p>{subTotals}</p>
          </div>
          <div className="checkout-button">
            <button onClick={() => history.goBack()}>Back</button>
            <button onClick={() => checkoutCart({ history })}>Beli</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
