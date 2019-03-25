import React, { useState } from 'react';
import ToDo from '../ToDo/ToDo';
import ToDoForm from '../ToDoForm/ToDoForm';

const Day = props => {
  const { toDos, date } = props;
  const [listVisible, setListVisibility] = useState(toDos.length > 0);

  return (
    <div className='day'>
      <div className='date' onClick={() => setListVisibility(!listVisible)}>
        {date}
      </div>
      <div className={`todo-list ${listVisible ? 'visible' : 'hidden'}`}>
        {toDos && toDos.map(toDo => <ToDo key={toDo.id} text={toDo.text} />)}
      </div>
    </div>
  );
};

export default Day;
