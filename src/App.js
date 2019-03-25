import React, { useState } from 'react';
import Header from './components/Header/Header';
import ToDoList from './components/ToDoList/ToDoList';
import ToDoForm from './components/ToDoForm/ToDoForm';
import { FirebaseContext } from './components/Firebase';
// import { toDos } from './mockData';
import './App.css';

const App = () => {
  const [formVisible, setFormVisibility] = useState(false);
  function toggleFormVisibility() {
    setFormVisibility(!formVisible);
  }
  return (
    <>
      <Header toggleFormVisibility={toggleFormVisibility} />
      <FirebaseContext.Consumer>
        {service => (
          <>
            <ToDoForm
              formVisible={formVisible}
              setFormVisibility={setFormVisibility}
            />
            <ToDoList firebaseService={service} />
          </>
        )}
      </FirebaseContext.Consumer>
    </>
  );
};

export default App;
