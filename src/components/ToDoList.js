import React from 'react';
import ToDo from './ToDo';

const ToDoList = (props) => {
  const { toDos } = props;
  return (
    <div>
      { toDos.map(toDo => 
        <ToDo key={toDo.id} text={toDo.text} date={toDo.date} />
      )}
    </div>
  );
};

export default ToDoList;
