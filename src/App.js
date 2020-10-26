
import React, { useEffect } from "react";
import "./App.css";
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from './component/Checkout/Checkout';
import Login from './component/Login/Login';
import { auth } from "./firebase";
import { useStateValue } from './component/contexApi/StateProvider';


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
