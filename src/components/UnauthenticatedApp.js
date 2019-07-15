import React from "react";
import Register from "./Register";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";

const UnauthenticatedApp = () => {
  return (
    <Router>
      <Route path="/register" component={Register} />
      <Route exact path="/" component={Login} />
    </Router>
  );
};

export default UnauthenticatedApp;
