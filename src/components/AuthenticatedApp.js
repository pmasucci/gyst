import React from "react";
import Timeline from "./Timeline";
import { BrowserRouter as Router, Route } from "react-router-dom";

const AuthenticatedApp = () => {
  return (
    <Router>
      <Route default component={Timeline} />
    </Router>
  );
};

export default AuthenticatedApp;
