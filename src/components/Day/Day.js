import React, { useState } from 'react';
import ToDo from '../ToDo';
import ToDoForm from '../ToDoForm';

const Day = props => {
  const { toDos, date } = props;
  const [formVisible, setFormVisibility] = useState(false);
  const [listVisible, setListVisibility] = useState(toDos.length > 0);

  return (
    <div className='day'>
      <div className='date' onClick={() => setListVisibility(!listVisible)}>
        {date}
      </div>
      <div className={`todo-list ${listVisible ? 'visible' : 'hidden'}`}>
        {toDos && toDos.map(toDo => <ToDo key={toDo.id} text={toDo.text} />)}
        {formVisible ? (
          <ToDoForm setFormVisibility={setFormVisibility} />
        ) : (
          <div className='todo-toggle' onClick={() => setFormVisibility(true)}>
            ➕
          </div>
        )}
      </div>
    </div>
  );
};

export default Day;
