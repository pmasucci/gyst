import React from 'react';

const ToDoForm = props => {
  const { setFormVisibility, formVisible } = props;
  function getDate() {
    let [month, day, year] = new Date().toLocaleDateString().split('/');
    return [year, month.padStart(2, 0), day.padStart(2, 0)].join('-');
  }

  function saveToDo() {
    setFormVisibility(false);
  }
  getDate();
  return (
    <>
      {formVisible && (
        <div className='todo-form-container'>
          <input className='todo-form' type='text' />
          <input
            className='todo-form-date'
            type='date'
            defaultValue={getDate()}
          />
          <button className='todo-save' onClick={saveToDo}>
            Save
          </button>
        </div>
      )}
    </>
  );
};

export default ToDoForm;
