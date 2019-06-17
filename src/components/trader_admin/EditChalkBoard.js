import React from 'react';

function EditChalkBoard(props) {
  const { inventory } = props;
  return (
    <div className="edit-chalk-board">
      {inventory.map(item => <p>{item.name}</p>)}
    </div>
  );
};

export default EditChalkBoard;
