import React, { Component } from 'react';
import ToDoList from './components/ToDoList';
import { toDos } from './mockData';
import './App.css';

class App extends Component {
  render() {
    const mappedToDos = mapToDos(toDos);
    return (
      <div>
        {Object.keys(mappedToDos).map(date => (
          <>
            <div class="date">{date}</div>
            <ToDoList key={date} toDos={mappedToDos[date]} />
          </>
        ))}
      </div>
    );
  }
}

function mapToDos(toDos) {
  const mappedToDos = {};
  for (let toDo of toDos) {
    mappedToDos[toDo.date] ? mappedToDos[toDo.date].push(toDo) : mappedToDos[toDo.date] = [toDo];
  }
  return mappedToDos;
}

export default App;
