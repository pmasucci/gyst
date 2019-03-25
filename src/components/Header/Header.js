import React from 'react';

const Header = props => {
  const { toggleFormVisibility } = props;
  return (
    <div className='header'>
      <div className='title'>gyst</div>
      <div className='add-todo' onClick={toggleFormVisibility}>
        ➕
      </div>
    </div>
  );
};

export default Header;
