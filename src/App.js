import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import PageNotFound from "./Components/PageNotFound";
import { PrivateRoute, AuthRoute } from "./HOC/Route";
import "./Scss/style.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PrivateRoute path="/" exact Component={Home} redirectPath="/login" />
          <AuthRoute path="/login" exact Component={Login} redirectPath="/" />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
