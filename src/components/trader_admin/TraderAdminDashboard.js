import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { TraderAdminAuthorization } from '../../utils';
import { Query } from "react-apollo";
import { TRADER_ADMIN_DATA_QUERY } from '../../graphql-types';
import AdminTraderCardTile from './AdminTraderCardTile';
// import CreateMarketForm from './CreateMarketForm';
import '../../styling/TraderTile.css';

function TraderAdminDashboard(props) {
  const [newMarketForm, setNewMarketForm] = useState(false);
  
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

  if(newMarketForm) return (
    <div className='market-admin-dashboard dashboard'>
      {/* <CreateMarketForm setNewMarketForm={setNewMarketForm} /> */}
    </div>
  );
  
  return (
    <div className="trader-admin-dashboard dashboard">
      {renderTraders()}
      <div className="trader-tile add-new" onClick={() => setNewMarketForm(true)} >
        <h1>Create New</h1>
      </div>
    </div>
  );
};

export default TraderAdminDashboard;
