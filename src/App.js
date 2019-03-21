import React, { Component } from 'react';
import ToDoList from './components/ToDoList';
import { FirebaseContext } from './components/Firebase';
// import { toDos } from './mockData';
import './App.css';

class App extends Component {
  render() {
    return (
      <FirebaseContext.Consumer>
        {service => <ToDoList firebaseService={service} />}
      </FirebaseContext.Consumer>
    );
  }
}

export default App;
