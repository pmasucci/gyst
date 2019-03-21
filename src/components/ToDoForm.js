import React from 'react';

const ToDoForm = props => {
  const { setFormVisibility } = props;
  return (
    <>
      <input className='todo-form' />
      <button className='todo-save' onClick={() => setFormVisibility(false)}>
        Save
      </button>
    </>
  );
};

export default ToDoForm;
