import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { TraderAdminAuthorization } from '../../utils';
import { Query } from "react-apollo";
import { TRADER_ADMIN_DATA_QUERY } from '../../graphql-types';
import AdminTraderCardTile from './AdminTraderCardTile';
import CreateTraderCardForm from './CreateTraderCardForm';
import '../../styling/TraderTile.css';

function TraderAdminDashboard(props) {
  const [newTraderForm, setNewTraderForm] = useState(false);
  
  if (!TraderAdminAuthorization()) return <Redirect to='/trader_admin/login' />;

  const renderTraders = () => (
    <Query query={TRADER_ADMIN_DATA_QUERY} >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error.message}</p>;
        
        return data.administeredTraders.map(traderCard => 
          <AdminTraderCardTile key={traderCard.id} traderCard={traderCard} />
        );
      }}
    </Query>
  );

  if(newTraderForm) return (
    <div className='market-admin-dashboard dashboard'>
      <CreateTraderCardForm setNewTraderForm={setNewTraderForm} />
    </div>
  );
  
  return (
    <div className="trader-admin-dashboard dashboard">
      {renderTraders()}
      <div className="trader-tile add-new" onClick={() => setNewTraderForm(true)} >
        <h1>Create New</h1>
      </div>
    </div>
  );
};

export default TraderAdminDashboard;
