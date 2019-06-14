import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { MarketAdminAuthorization } from '../../utils';
import { useQuery } from 'react-apollo-hooks';
import { MARKET_ADMIN_DATA_QUERY } from '../../graphql-types';
import AdminMarketTile from './AdminMarketTile';
import CreateMarketForm from './CreateMarketForm'
import '../../styling/MarketTile.css';

function MarketAdminDashboard(props) {
  const { data, error, loading } = useQuery(MARKET_ADMIN_DATA_QUERY, {});
  const [newMarketForm, setNewMarketForm] = useState(false);
  
  if (!MarketAdminAuthorization()) return <Redirect to='/market_admin/login' />;

  if (loading) return <div>Loading...</div>;
  
  if (error) return <div>Error! {error.message}</div>;

  // const { name, blurb, address, geoLocation, directions, imgUrl, openHours, traders } = data.administeredMarkets;
  // const { id, email, firstName, lastName } = data.marketAdminData;
  
  const renderMarkets = () => {
    return data.administeredMarkets.map(market => 
      <AdminMarketTile key={market.id} market={market} />
    )
  };

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
