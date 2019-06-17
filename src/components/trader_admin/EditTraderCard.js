import React, { useState } from 'react';
import EditTraderForm from './EditTraderForm';
import EditChalkBoard from './EditChalkBoard';

function EditTraderCard(props) {
  const { traderCard } = props;
  const [editTraderForm, setEditTraderForm] = useState(false);
  const [chalkBoard, setChalkBoard] = useState(true);

  return (
    <div className="edit-trader-card container">
      <div className="buttons">
        <button 
          className="info select-slide"
          onClick={() => {
            setChalkBoard(false);
            setEditTraderForm(true);
          }}
        >Info</button>
        <button 
          className="chalk-board select-slide"
          onClick={() => {
            setChalkBoard(true);
            setEditTraderForm(false);
          }}
        >Chalk Board</button>
      </div>
      {editTraderForm && <EditTraderForm setEditTraderForm={setEditTraderForm} traderCard={traderCard} />}
      {chalkBoard && <EditChalkBoard inventory={traderCard.inventory} />}
    </div>
  );
};

export default EditTraderCard;
