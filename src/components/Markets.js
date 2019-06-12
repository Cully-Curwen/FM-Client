import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';
import MarketCard from './MarketCard';

import { MARKET_LIST_QUERY } from '../graphql'

function Markets(props) {
  const [selectedMarket, setSelectedMarket] = useState({});

  const { data, error, loading } = useQuery(MARKET_LIST_QUERY);
  if (loading) {
    return <div>Loading...</div>;
  };
  if (error) {
    return <div>Error! {error.message}</div>
  };

  return (
    <div className="markets">
      {selcetedMarket 
        ? 
        : data.marketsList.map(market => 
          <MarketCard key={market.id} market={market} />
        )
      }
    </div>
  );
};

export default Markets;