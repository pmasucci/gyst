import React from "react";

const AuthStateContext = React.createContext();
const AuthDispatchContext = React.createContext();

function authReducer(state, action) {
  switch (action.type) {
    case "login": {
      return { user: action.user };
    }
    case "logout": {
      return { user: undefined };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function useAuthState() {
  const context = React.useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error("useAuthState must be used within an AuthProvider");
  }
  return context;
}

function useAuthDispatch() {
  const context = React.useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error("useAuthDispatch must be used within an AuthProvider");
  }
  return context;
}

function AuthProvider({ children }) {
  const [state, dispatch] = React.useReducer(authReducer, { user: undefined });

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
}

export { AuthProvider, useAuthState, useAuthDispatch };
