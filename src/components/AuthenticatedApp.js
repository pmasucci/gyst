import React from "react";
import Timeline from "./Timeline";
import { BrowserRouter as Router, Route } from "react-router-dom";

const AuthenticatedApp = () => {
  return (
    <Router>
      <Route exact path="/" component={Timeline} />
    </Router>
  );
};

export default AuthenticatedApp;
