import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component.jsx";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component.jsx";
import Header from "./component/header/header.component.jsx";
import signInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={signInAndSignUp}></Route>
      </Switch>
    </div>
  );
}

export default App;
