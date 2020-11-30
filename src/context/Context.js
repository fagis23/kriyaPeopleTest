import { useState, createContext } from "react";

import axios from "../axios";

const Context = createContext();

const Provider = props => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const [subTotals, setSubTotals] = useState(0);

  const setAllProduct = () => {
    if (carts.length === 0) {
      setLoading(true);
      axios
        .get("/todos")
        .then(res => {
          setLoading(false);
          let lists = [];
          res.data.map(item => {
            const items = { ...item, inCart: false, count: 1 };
            lists.push(items);
          });

          setProducts(lists);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  const setToCart = product => {
    const index = products.findIndex(item => item.id === product.id);
    const singleProduct = products[index];
    singleProduct.inCart = true;

    const all_cart = [...carts, singleProduct];
    setCarts(all_cart);
    countTotals(all_cart);
  };

  const incrementItemInCart = id => {
    let tempCart = [...carts];
    const index = carts.findIndex(item => item.id === id);
    const item = tempCart[index];
    item.count += 1;

    const items = [...tempCart];
    setCarts(items);
    countTotals(items);
  };

  const decrementItemInCart = id => {
    let tempCart = [...carts];
    const index = carts.findIndex(item => item.id === id);
    const item = tempCart[index];
    item.count -= 1;
    if (item.count < 1) {
      item.count = 1;
      item.inCart = false;
      const deleteItem = carts.filter(item => item.id !== id);
      tempCart = [...deleteItem];
    }

    const items = [...tempCart];
    setCarts(items);
    countTotals(items);
  };

  const countTotals = items => {
    let totals = 0;
    items.map(item => (totals += item.count));
    setSubTotals(totals);
  };

  const checkoutCart = ({ history }) => {
    setCarts([]);
    alert("Success Beli Item, Have a good day 😃");
    history.push("/");
  };

  return (
    <Context.Provider
      value={{
        products,
        loading,
        carts,
        subTotals,
        setAllProduct,
        setToCart,
        incrementItemInCart,
        decrementItemInCart,
        checkoutCart,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

const Consumer = Context.Consumer;

export { Context, Provider, Consumer };
