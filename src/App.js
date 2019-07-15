import React from "react";
import { useAuthState } from "./context/AuthContext";
import UnauthenticatedApp from "./components/UnauthenticatedApp";
import AuthenticatedApp from "./components/AuthenticatedApp";
import "./App.css";

const App = () => {
  const auth = useAuthState();
  return <>{auth.user ? <AuthenticatedApp /> : <UnauthenticatedApp />}</>;
};

export default App;
