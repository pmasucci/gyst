import React from 'react';

const ToDo = props => {
  const { text, date } = props;
  return (
    <div class="todo">
        <input type="checkbox" />
        <div class="todo-text">{text}</div>
    </div>
  );
};

export default ToDo;
