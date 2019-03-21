import React from 'react';

const ToDo = props => {
  const { text } = props;
  return (
    <div className='todo'>
      <input type='checkbox' />
      <div className='todo-text'>{text}</div>
    </div>
  );
};

export default ToDo;
