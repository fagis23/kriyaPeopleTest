import React from "react";
import { Switch, Route } from "react-router-dom";

import Product from "./pages/Product";
import Checkout from "./pages/Checkout";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route component={Checkout} path="/checkout" exact />
        <Route component={Product} path="/" exact />
      </Switch>
    </div>
  );
};

export default App;
