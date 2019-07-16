import React from "react";
import FirebaseService from "../services/firebase.service";

const FirebaseContext = React.createContext();

function useFirebase() {
  const context = React.useContext(FirebaseContext);
  if (context === undefined) {
    throw new Error("useFirebase must be used within a FirebaseProvider");
  }
  return context;
}

function FirebaseProvider({ children }) {
  return (
    <FirebaseContext.Provider value={FirebaseService}>
      {children}
    </FirebaseContext.Provider>
  );
}

export { FirebaseProvider, useFirebase };
