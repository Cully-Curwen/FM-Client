import React from 'react';
import { Redirect } from 'react-router-dom';
import { MarketAdminAuthorization } from '../../utils';
import { useQuery } from 'react-apollo-hooks';
import { MARKET_ADMIN_DATA_QUERY } from '../../graphql-types';

function MarketAdminDashboard(props) {
  const { data, error, loading } = useQuery(MARKET_ADMIN_DATA_QUERY)
  
  if (!MarketAdminAuthorization()) return <Redirect to='/market_admin/login' />;

  if (loading) return <div>Loading...</div>;
  
  if (error) { return <div>Error! {error.message}</div> };

  const { name, blurb, address, geoLocation, directions, imgUrl, openHours, traders } = data.administeredMarkets;
  const {} = data.marketAdminData;

  return (
    <div className='market-admin-dashboard dashboard'>
      welcome market admin
    </div>
  );
};

export default MarketAdminDashboard;
