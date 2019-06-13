import React, { useState } from 'react';
// import { Switch, Route, Redirect } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';
import MarketTile from './MarketTile';
import { MARKET_LIST_QUERY } from '../graphql-types';

function Markets(props) {

  const { data, error, loading } = useQuery(
    MARKET_LIST_QUERY,
    {fetchPolicy: 'cache-and-network'}
  );
  if (loading) {
    return <div>Loading...</div>;
  };
  if (error) {
    return <div>Error! {error.message}</div>
  };

  return (
    <div className="markets">
      { data.marketsList.map(market => 
          <MarketTile key={market.id} market={market} />
        )
      }
    </div>
  );
};

export default Markets;