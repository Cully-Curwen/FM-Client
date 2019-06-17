import React, {  } from 'react';
import { Query } from 'react-apollo';
import MarketTile from './MarketTile';
import { MARKET_LIST_QUERY } from '../graphql-types';

function Markets(props) {
  return (
    <Query query={MARKET_LIST_QUERY} >
      {({ data, error, loading }) => {
        if (loading) { return <div>Loading...</div>; };
        if (error) { return <div>Error! {error.message}</div> };

        const renderMarkets = () => {
          return data.marketsList.map(market => 
            <MarketTile key={market.id} market={market} />
            )
          };

        return (
          <div className="markets">
            {renderMarkets()}
          </div>
        );
      }}    
    </Query>
  );
};

export default Markets;