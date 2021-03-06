//  client.src.App.js

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

// Redux imports
import { Provider } from "react-redux";
import store from "./store";

import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";
import TemporaryDrawer from "./components/Nav";
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import ExpenseEntry from "./pages/ExpenseEntry";
import IncomeEntry from "./pages/IncomeEntry";


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

function UserLogout() {
    store.dispatch(logoutUser());
    window.location.href = "./";
}

function App() {
  return (

    <Provider store={store}>
      <Router>
        <div className="App">
          <TemporaryDrawer />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute exact path="/logout" component={UserLogout} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/profile" component={Dashboard} />
            <PrivateRoute exact path="/expenseEntry" component={ExpenseEntry} />
            <PrivateRoute exact path="/incomeEntry" component={IncomeEntry} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
