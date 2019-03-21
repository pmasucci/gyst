import React, { useState, useEffect } from 'react';
import Day from './Day/Day';

const ToDoList = props => {
  const { firebaseService } = props;

  const [toDos, setToDos] = useState();

  useEffect(() => {
    getToDos();
  }, []);

  return (
    <>
      {toDos &&
        Object.keys(toDos).map(date => (
          <Day key={date} date={date} toDos={toDos[date]} />
        ))}
    </>
  );

  async function getToDos() {
    const docs = await firebaseService.getTodos();
    const toDos = toDosByDate(docs);
    setToDos(toDos);
  }

  function toDosByDate(toDos) {
    const mappedToDos = {};
    toDos.forEach(toDo => {
      toDo = { id: toDo.id, ...toDo.data() };
      const date = toDo.date.toDate().toDateString();
      (mappedToDos[date] = mappedToDos[date] || []).push(toDo);
    });
    return mappedToDos;
  }
};

export default ToDoList;
