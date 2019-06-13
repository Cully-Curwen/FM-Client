import React from 'react';

function Item(props) {
  const { id, name, description, price, quantity } = props.item;

  return (
    <div className="item">
      {name + ' ' + description + ' ' + price + ' ' + quantity}    
    </div>
  );
};

export default Item;
