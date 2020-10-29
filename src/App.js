
import React, { useEffect } from "react";
import "./App.css";
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from './component/Checkout/Checkout';
import Login from './component/Login/Login';
import { auth } from "./firebase";
import { useStateValue } from './component/contexApi/StateProvider';
import Payment from './component/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const promise = loadStripe("pk_test_51Hgs6pGKeDbvLZ1Yn6e29GzHVHMAALAwfq9vp1Xr3IxkTJHtVgrnfNUOD5s2g0uev43GazJRyKVk6ALExrxEBT0u00UxfWdDy2")


function App() {

  const [{ }, dispatch] = useStateValue()



  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('the user id ====>', authUser);

      if (authUser) {


        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])



  return (

    <Router>

      <div className="app">

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>

      </div>

    </Router>
  );
}

export default App;
