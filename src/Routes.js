import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/signup/Register";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />;
      <Route path="/register" component={Register} />;
      <Route path="*" component={() => <h1>NOT FOUND</h1>} />
    </Switch>
  );
};

export default Routes;
