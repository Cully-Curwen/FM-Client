import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { MarketAdminAuthorization } from '../../utils';
import { Query } from "react-apollo";
import { MARKET_ADMIN_DATA_QUERY } from '../../graphql-types';
import AdminMarketTile from './AdminMarketTile';
import CreateMarketForm from './CreateMarketForm'
import '../../styling/MarketTile.css';

function MarketAdminDashboard(props) {
  const [newMarketForm, setNewMarketForm] = useState(false);
  
  if (!MarketAdminAuthorization()) return <Redirect to='/market_admin/login' />;

  const renderMarkets = () => (
    <Query query={MARKET_ADMIN_DATA_QUERY} >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error.message}</p>;
        
        return data.administeredMarkets.map(market => 
          <AdminMarketTile key={market.id} market={market} />
        );
      }}
    </Query>
  );

  if(newMarketForm) return (
    <div className='market-admin-dashboard dashboard'>
      <CreateMarketForm setNewMarketForm={setNewMarketForm} />
    </div>
  );
  
  return (
    <div className='market-admin-dashboard dashboard'>
      {renderMarkets()}
      <div className="market-tile add-new" onClick={() => setNewMarketForm(true)} >
        <h1>Create New</h1>
      </div>
    </div>
  );
};

export default MarketAdminDashboard;
