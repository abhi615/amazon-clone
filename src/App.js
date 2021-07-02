import React from "react";
import { useEffect } from "react";
import Header from "./Header";
import "./App.css";
import Home from "./Home";
import Checkout from "./checkout";
import Login from "./Login";
import { auth } from "./firebase";
import Payment from "./Payment";
import Orders from "./orders";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();

  const promise = loadStripe(
    "pk_test_51J837WSF2rIM6UGOuC6JxDhrQ3sBai7u1vauKDceQdmn0Dil2E5AgD5unJjH27wQeE0P2iBQikZfQ7hmtncAgw1c00rgNea3Gn"
  );
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
