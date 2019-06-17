import React, { useState } from 'react';
import { Query } from "react-apollo";
import { TRADER_CARD_DETAILS_QUERY } from '../../graphql-types';
import EditTraderForm from './EditTraderForm';
import EditChalkBoard from './EditChalkBoard';

function EditTraderCard(props) {
  const traderCardId = props.traderCard.id;
  const [editTraderForm, setEditTraderForm] = useState(false);
  const [chalkBoard, setChalkBoard] = useState(true);

  return (
    <Query 
      query={TRADER_CARD_DETAILS_QUERY} 
      variables={{ traderCardId }}
      fetchPolicy={'cache-and-network'}
    >
      {({ data, loading, error }) => {
        if (loading) return <></>;
        if (error) return <p>{error.message}</p>;
        const traderCard = data.traderCardDetails;
        
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
            {chalkBoard && <EditChalkBoard traderCard={traderCard} />}
          </div>
        );
      }}
    </Query>

    
  );
};

export default EditTraderCard;
