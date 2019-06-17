import React, { useState } from 'react';
import EditItemForm from '../items/EditItemForm';
import CreateItemForm from '../items/CreateItemForm';

function EditChalkBoard(props) {
  const { inventory } = props.traderCard;
  const traderCardId = props.traderCard.id;
  const [newItemForm, setNewItemForm] = useState(false);

  return (
    <div className="edit-chalk-board">
      {inventory.map(item => <EditItemForm key={item.id} item={item} />)}
      {newItemForm
        ? <CreateItemForm traderCardId={traderCardId} setNewItemForm={setNewItemForm} />
        : <div className="create-item item" onClick={() => setNewItemForm(true)} >Create New Item</div>
      }
    </div>
  );
};

export default EditChalkBoard;
